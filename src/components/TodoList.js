import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  state = {
    todos: [
      {
        id: "5b21ca3eeb7f6fbccd471815",
        text: "Nauczyć się React",
      },
      {
        id: "5b21ca3eeb7f6fbccd471816",
        text: "Skończyć studia",
      },
      {
        id: "5b21ca3eeb7f6fbccd471817",
        text: "Zarabiać miliony",
      },
      {
        id: "5b21ca3eeb7f6fbccd4ssdsa4",
        text: "Zjeść pizzę",
      },
      {
        id: "5b21ca3eeb7f6fbccd471819",
        text: "Iść spać",
      },
    ],
    todoToShow: "all",
    toggleAllComplete: true,
  };

  addTodo = (todo) => {
    this.setState((state) => ({
      todos: [todo, ...state.todos],
    }));
  };

  toggleComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <div>
          <br />
          <h3>
            Zadania do zrobienia:{" "}
            {this.state.todos.filter((todo) => !todo.complete).length}{" "}
          </h3>
          <br />
          <p class="font-weight-light">
            {" "}
            Oznacz jedno zadanie jako wykonane, klikając w nie
            <br /> lub zaznacz wszystkie na raz za pomocą przycisku.{" "}
          </p>
          <br />
        </div>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          <br />
          <button
            className="btn btn-sm btn-success m-2"
            onClick={() => this.updateTodoToShow("all")}
          >
            wszystkie
          </button>
          <button
            className="btn btn-sm btn-warning m-2"
            onClick={() => this.updateTodoToShow("active")}
          >
            do zrobienia
          </button>
          <button
            className="btn btn-sm btn-secondary m-2"
            onClick={() => this.updateTodoToShow("complete")}
          >
            zrobione
          </button>
        </div>
        {this.state.todos.some((todo) => todo.complete) ? (
          <div>
            <button
              className="btn btn-sm btn-danger m-2"
              onClick={this.removeAllTodosThatAreComplete}
            >
              usuń wszystkie wykonane zadania
            </button>
          </div>
        ) : null}
        <div>
          <button
            type="button"
            class="btn btn-primary m-2"
            onClick={() =>
              this.setState((state) => ({
                todos: state.todos.map((todo) => ({
                  ...todo,
                  complete: state.toggleAllComplete,
                })),
                toggleAllComplete: !state.toggleAllComplete,
              }))
            }
          >
            o(d)znacz wszystkie jako wykonane
          </button>
        </div>
      </div>
    );
  }
}
