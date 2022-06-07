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

