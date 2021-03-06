import React, {Component} from "react";
import moment from "moment";
import { ErrorMessage, Field, Form, Formik } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService"

class TodoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD'),
        }
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => {
                this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD'),
                })
            })
    }

    validate = (values) => {
        let errors = {}

        if(!values.description) {
            errors.description = 'Enter a Description'
        } else if(values.description.length < 5) {
            errors.description = 'Enter at least 5 Charaters in Description'
        }
        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Target Date'
        }

        console.log(errors)
        return errors

    }

    onSubmit = (values) => {
        let username = AuthenticationService.getLoggedInUserName();
        let todo = {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }
        if(this.state === -1) {
            TodoDataService.createTodo(username, todo)
                .then(() => this.props.navigate('/todos'))
        } else {
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.navigate('/todos'))
        }
        console.log(values)
    }

    render() {
        let {description, targetDate} = this.state
        return (
            <div>
                <h1>Todo</h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, targetDate }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlue={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>


            </div>

        ) 
    }
}

export default TodoComponent;