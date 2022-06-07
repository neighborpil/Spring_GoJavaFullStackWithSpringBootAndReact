import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";

class TodoApp extends Component {
    render() {
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return (
            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <Route path="/todos" element={<ListTodoComponent/>} />
                        <Route path="*" element={<ErrorComponent />} />
                    </Routes>
                </Router>

                {/* <LoginComponent />   
                <WelcomeComponent />  */}
            </div>
        )
    }
}

class ListTodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos : [
                {id: 1, description: 'Learn React'},
                {id: 2, description: 'Become a expert'},
                {id: 2, description: 'Buy present'},
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo => 
                                    <tr>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome {this.props.params.name}</div>
    }
}

function ErrorComponent() {
    return <div>An Error Occurred. I don't know what to do. Contact support at abcd</div>
}

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'neighborpil',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked= this.loginClicked.bind(this);
    }

    handleChange(event) {
        // console.log(this.state);
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState(
    //         {
    //             [event.target.name] : event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({password: event.target.value} )

    // }
     
    loginClicked() {
        // console.log(this.state )

        // neighborpil, dummy
        if(this.state.username === 'neighborpil' && this.state.password === 'dummy') {
            this.props.navigate(`/welcome/${this.state.username}`)
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        }
        else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }
    render() {
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                {this.state.hasLoginFailed && <div> Invalid Credentials</div> }
                {this.state.showSuccessMessage && <div>Login Sucessful</div> }
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked }>Login</button>
            </div>
        )
    }

}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null;
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login Sucessful</div>
//     }
//     return null;
// }

export default TodoApp