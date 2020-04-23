import React, { useState } from "react";
import "./App.css";

import ResourceList from "./components/ResourceList";
import Users from "./components/Users";

// class component
/* class App1 extends React.Component {
  state = {
    resourceName: "posts",
  };

  onChangeStatePosts = () => {
    this.setState({
      resourceName: "posts",
    });
  };

  onChangeStateTodos = () => {
    this.setState({
      resourceName: "todos",
    });
  };

  render() {
    const { resourceName } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.onChangeStatePosts}>Posts</button>
        <button onClick={this.onChangeStateTodos}>Todos</button>
        <ResourceList resourceName={resourceName} />
      </React.Fragment>
    );
  }
} */

// function component with hooks
const App = () => {
  // resourceName is a current state name,
  // setResourceName is a function that update the current state
  // useState has a param which is the initial value of the resourceName
  const [resourceName, setResourceName] = useState("posts");

  return (
    <React.Fragment>
      <Users />
      <button onClick={() => setResourceName("posts")}>Posts</button>
      <button onClick={() => setResourceName("todos")}>Todos</button>
      <ResourceList resourceName={resourceName} />
    </React.Fragment>
  );
};

export default App;
