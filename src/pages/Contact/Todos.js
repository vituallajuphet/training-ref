import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";

import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";

class Todos extends Component {
    render() {
        return (
            <ul className="todo-list">
            {todos && todos.length
              ? todos.map((todo, index) => {
                  return <Todo key={`todo-${todo.id}`} todo={todo} />;
                })
              : "No todos, yay!"}
          </ul>
        );
    }
}

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return { todos };
  };

export default connect(mapStateToProps)(Todos);