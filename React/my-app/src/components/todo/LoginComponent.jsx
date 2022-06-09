import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";

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
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.navigate(`/welcome/${this.state.username}`)
            // this.setState({showSuccessMessage: true})
            // this.setState({hasLoginFailed: false})
        }
        else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials</div> }
                    {this.state.showSuccessMessage && <div>Login Sucessful</div> }
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="ml-2 btn btn-success" onClick={this.loginClicked }>Login</button>

                </div>
            </div>
        )
    }

}

export default LoginComponent