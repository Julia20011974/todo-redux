import React from "react";
import { inputRef } from "../constants/ref";

export const TodoForm = ({ todo = {}, addTodo, editTodo }) => {
  const addHandle = () => {
    addTodo(inputRef.current.value);
    inputRef.current.value = "";
  };

  const editHandle = () => {
    editTodo(todo.id, inputRef.current.value, false);
    inputRef.current.value = "";
  };

  return (
    <div>
      <input ref={inputRef} />
      {todo.clicked ? (
        (inputRef.current.value = todo.text) && (
          <button onClick={editHandle}>изменить</button>
        )
      ) : (
        <button onClick={addHandle}>добавить</button>
      )}
    </div>
  );
};
