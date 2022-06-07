# Spring_GoJavaFullStackWithSpringBootAndReact
shadow coding of Udemy course


### How to create REACT app
 - install node(https://memostack.tistory.com/274)
 - create app in terminal
```
$ npx create-react-app my-app 
```
```
npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

```

#### What is react dom and react native?
 - react dom can build web applications   
 - react native can build android or ios applications

### Function component
 - much simpler than class component

```
function ThirdComponent() {
  return (
    <div className="thirdComponent">
      ThirdComponent
    </div>
  );
}
```

### Class component
 - complex than function component but has some features
```

class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World!
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

```

### Babel
 - javascript compiler
 - compile the latest javascript code to older version of it
 - always should be closed correctly. not "<br>", "<br/>" is ok
 - should return one item
 - custom component should start with captial letter

### Components importing
 - set export default or export before class or function name
 - FirstComponet.jsx
```
import React, { Component } from "react";

// class component
class FirstComponent extends Component {
  render() {
    return (
      <div className="firstComponent">
        FirstComponent
      </div>
    );
  }
}

export default FirstComponent;

```
 - ThirdComponent.jsx

```
import React   from "react";
function ThirdComponent() {
  return (
    <div className="thirdComponent">
      ThirdComponent
    </div>
  );
}

export default ThirdComponent;
```
 - App.js

```
import React, { Component } from 'react';
import FirstComponent from './components/learning-examples/FirstComponent'; // default로 지정된 것은 중괄호가 필요하지 않다, 나머지는 필요 
import SecondComponent from './components/learning-examples/SecondComponent';
import ThirdComponent from './components/learning-examples/ThirdComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World!
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;

```

### State control

```
import { render } from "@testing-library/react";
import React, { Component } from "react";
import './Counter.css'

class Counter extends Component {

    // Define the initial state in a constructor
    // state => counter 0

    constructor() {
        super(); // easily make ethis erro
        this.state = {
            counter : 0
        }

        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+1</button>
                <span className="count">{this.state.counter}</span>
            </div>
        );

    }

    increment() { // Update state - counter++

        this.setState({
            counter : this.state.counter + 1
        });
    }
}


export default Counter;
```


#### need to install "React Developer Tools" on Chrome browser
