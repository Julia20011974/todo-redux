import React from 'react';
import PropTypes from 'prop-types';

function Todo({
  todo, toggleTodo, removeTodo, setClickedTodo,
}) {
  const complete = (id) => {
    toggleTodo(id);
  };

  const remove = (id) => {
    removeTodo(id);
  };

  const clickEdit = (item) => {
    setClickedTodo(item);
  };

  return (
    <div>
      <input
        type="checkbox"
        id={todo.id}
        onChange={complete.bind(this, todo.id)}
        checked={todo.completed}
      />
      <label htmlFor={todo.id}>{todo.text}</label>
      <button type="button" onClick={clickEdit.bind(this, todo)}>✎</button>
      <button type="button" onClick={remove.bind(this, todo.id)}>❌</button>
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.objectOf(Object).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  setClickedTodo: PropTypes.func.isRequired,
};

export default Todo;
