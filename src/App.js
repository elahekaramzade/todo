import React, { Component } from "react";
import "./App.css";
import TodoEntry from "./component/TodoEntry";
import TodoItems from "./component/TodoItems";
import Footer from "./component/footer";

class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry></TodoEntry>
        <TodoItems></TodoItems>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
