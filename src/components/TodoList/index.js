import React, { Component, Fragment } from "react";

export default class TodoList extends Component {
  state = {
    todoText: "",
    todos: JSON.parse(localStorage.getItem("todos")) || []
  };

  handleChangeText = e => {
    this.setState({ todoText: e.target.value });
  };

  handleAddTodo = () => {
    const { todoText } = this.state;
    this.setState(
      {
        todos: [...this.state.todos, { id: Math.random(), text: todoText }],
        todoText: ""
      },
      () => localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  };

  handleRemoveTodo = id => {
    this.setState(
      {
        todos: this.state.todos.filter(todo => todo.id !== id)
      },
      () => localStorage.setItem("todos", JSON.stringify(this.state.todos))
    );
  };

  render() {
    return (
      <Fragment>
        <input
          type="text"
          onChange={this.handleChangeText}
          value={this.state.todoText}
        />
        <button onClick={this.handleAddTodo}>Adicionar Tarefa</button>
        <hr />

        {this.state.todos.map(todo => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => this.handleRemoveTodo(todo.id)}>
              Remover
            </button>
          </li>
        ))}
      </Fragment>
    );
  }
}
