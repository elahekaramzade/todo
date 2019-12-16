import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };
  OnDestroy = () => {
    this.props.todo.destroy();
  };
  
  render() {
    const { todo } = this.props;
    return (
      <div>
        <li className={todo.completed ? "completed" : ""}>
          <div className="view">
            <input
              onChange={this.onToggle}
              className="toggle"
              type="checkbox"
              checked={todo.completed}
            />
            <label>{todo.title}</label>
            <button className="destroy" onClick={this.OnDestroy}></button>
          </div>
        </li>
      </div>
    );
  }
}
export default TodoItem;
