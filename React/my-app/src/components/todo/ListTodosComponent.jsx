import React, {Component} from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodoComponent extends Component {

    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            todos : [],
            message: null
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos();
        console.log(this.state)

    }

    refreshTodos = () => {
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

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`shouldComponentUpdaten${nextProps}`)
        console.log('shouldComponentUpdate:' + nextState)
        return true; // false로 할 경우, state가 업데이트 되더라도 화면을 업데이트 하지 말라는 것
    }

    componentWillUnmount() {
        console.log('compoenntWillUnmount')
    }

    updateTodoClicked = (id) => {
        console.log(`update ${id}`)
        
        this.props.navigate(`/todos/${id}`)
    }
 
    deleteTodoClicked = (id) => {
        let username = AuthenticationService.getLoggedInUserName();
        console.log(`${id}, ${username}`)
        TodoDataService.deleteTodo(username, id)
            .then(
                response => {
                    this.setState({message: `Delete of todo ${id} Success`})
                    this.refreshTodos();
                }
            )
    }
   
    render() {
        console.log('render')
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Is Completeted</th>
                                <th>Target Date</th>
                                <th>Delete</th>
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
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default ListTodoComponent;