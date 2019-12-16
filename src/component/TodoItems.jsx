import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
@observer
class TodoItems extends Component {
  render() {
    return (
      <div>
        <section className="main">
          <input  className="toggle-all" type="checkbox" />
          <label >Mark all as complete</label>
          <ul className="todo-list">
            {TodoStore.todos.map(m => {
              return <TodoItem todo={m} key={m.id}></TodoItem>
            })}
          </ul>
        </section>
      </div>
    );
  }
}
export default TodoItems;
