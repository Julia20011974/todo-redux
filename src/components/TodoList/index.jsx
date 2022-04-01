import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

function TodoList({
  todos, toggleTodo, removeTodo, setClickedTodo,
}) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          setClickedTodo={setClickedTodo}
        />
      ))}
    </div>

  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(Object).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  setClickedTodo: PropTypes.func.isRequired,
};

export default TodoList;
