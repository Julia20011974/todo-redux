import React from "react";
import { Todo } from "./Todo";

const TodoLists = ({ todos, toggleTodo, removeTodo, setClickedTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <Todo
            text={todo.text}
            completed={todo.completed}
            onClick={() => toggleTodo(todo.id)}
          />
          <button onClick={() => setClickedTodo(todo)}>✎</button>
          <button onClick={() => removeTodo(todo.id)}>❌</button>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default TodoLists;
