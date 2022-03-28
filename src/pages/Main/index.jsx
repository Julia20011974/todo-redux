import React from "react";
import TodoList from "../../components/TodoList";
import { TodoForm } from "../../components/TodoForm";
import { Footer } from "../../components/Footer";

export const Main = ({
  todos,
  todo,
  active,
  addTodo,
  toggleTodo,
  removeTodo,
  editTodo,
  setClickedTodo,
  setVisibilityFilter,
}) => {
  return (
    <div>
      <TodoForm todo={todo} addTodo={addTodo} editTodo={editTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        setClickedTodo={setClickedTodo}
      />
      <Footer active={active} setVisibilityFilter={setVisibilityFilter} />
    </div>
  );
};
