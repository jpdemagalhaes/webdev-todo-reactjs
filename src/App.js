import React, { Component } from "react";

import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Webdev</h1>

        <TodoList />
      </div>
    );
  }
}

export default App;
