import { render } from "@testing-library/react";
import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Counter.css'

class Counter extends Component {

    // Define the initial state in a constructor
    // state => counter 0

    constructor() {
        super(); // easily make this error
        this.state = {
            counter : 0,
        }

        this.increment = this.increment.bind(this); // 람다식을 쓸때는 필요가 없다
        
    }

    // render = () => { // 람다식으로 바꿔주면 메소드의 바인딩이 필요 없다
    render() {
        // const style = {fontSize: "50px", padding: "15px 30px"};
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count"
                    // style={style}
                >
                    {this.state.counter}
                </span>
            </div>
        );

    }

    // increment = () => { // Update state - counter++
    increment () {

        this.setState({
            counter : this.state.counter + this.props.by,
        });
    }
}

Counter.defaultProps = {
    by : 1
}

Counter.propTypes = {
    by : PropTypes.number
}

export default Counter;