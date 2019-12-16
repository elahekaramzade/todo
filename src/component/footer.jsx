import React, { Component } from "react";
import todoStore from "../stores/TodoStore";
import { observer } from "mobx-react";
import { action } from "mobx";
@observer
class Footer extends Component {
  @action
  clearCompleted = () => {
    todoStore.clearCompleted();
  };
  render() {
    return (
      <div>
        <footer className="footer">
          <span className="todo-count">
            <strong>{todoStore.activeTodoCount}</strong> item left
          </span>
          <ul className="filters">
            <li>
              <a className="selected" href="#/">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          {todoStore.completedCount === 0 ? null : (
            <button className="clear-completed" onClick={this.clearCompleted}>
              Clear completed
            </button>
          )}
        </footer>
      </div>
    );
  }
}
export default Footer;
