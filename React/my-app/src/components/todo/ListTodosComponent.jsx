import React, {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos : [
                // {id: 1, description: 'Learn React', done:false, targetDate: new Date()},
                // {id: 2, description: 'Become a expert', done:false, targetDate: new Date()},
                // {id: 3, description: 'Buy present', done:false, targetDate: new Date()},
            ]
        }
    }

    componentDidMount() {

        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {
                    console.log(response)
                    this.setState((prevState) => {
                        return {todos: response.data}
                    });
                }
            )

    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
`                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Is Completeted</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo => 
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td>{todo.targetDate.toString()}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>`
                </div>

            </div>
        )
    }
}

export default ListTodoComponent;