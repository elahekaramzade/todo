import { observable, action, computed } from "mobx";

import TodoModel from "./TodoModel";

class TodoStore {
  @observable
  todos = [];
  lastId = 0;

  @computed get activeTodoCount() {
    return this.todos.reduce((sum, todo) => sum + (todo.completed ? 0 : 1), 0);
  }
  @computed get completedCount() {
    return this.todos.length - this.activeTodoCount;
  }

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, this.lastId++));
  }
  @action
  clearCompleted() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}
const store = new TodoStore();
export default store;
