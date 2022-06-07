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
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        
    }

  render() {
    return (
      <div className="Counter">
        {/* <LearningComponents></LearningComponents> */}
        {/* <CounterButton by="1" /> */}
        <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <span className="count"
            // style={style}
        >
            {this.state.counter}
        <div><button className="reset" onClick={this.reset}>Reset</button></div>
        </span>
      </div>
    )
  }

    reset() {
        this.setState(
            (prevState) => {
                return { counter: 0}
            }
        )
    }

    // increment = () => { // Update state - counter++
    increment (by) {
        console.log(`increment from child - ${by}`);

        this.setState(
            (prevState) => {
            return {counter : prevState.counter + by}
            }
        );
    }   

    decrement (by) {
        console.log(`decrement from child - ${by}`);

        this.setState(
            (prevState) => {
            return {counter : prevState.counter - by}
            }
        );
    }
}

class CounterButton extends Component {

    constructor() {
        super();

        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    // render = () => { // 람다식으로 바꿔주면 메소드의 바인딩이 필요 없다
    render() {
        // const style = {fontSize: "50px", padding: "15px 30px"};
        return (
            <div className="counterBut ton">
                <button onClick={this.increment}>+{this.props.by}</button>
                <button onClick={this.decrement}>-{this.props.by}</button>
            </div>
        );

    }

    increment() {
        this.setState({
            counter: this.state.counter += this.props.by
        })

        this.props.incrementMethod(this.props.by); 
    }

    decrement() {
        this.setState({
            counter: this.state.counter -= this.props.by
        })

        this.props.decrementMethod(this.props.by); 
    }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default Counter;