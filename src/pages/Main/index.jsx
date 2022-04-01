import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';
import ControlPanel from '../../components/ControlPanel';

function Main({
  todo = {},
  todos,
  active,
  addTodo,
  toggleTodo,
  removeTodo,
  setClickedTodo,
  setVisibilityFilter,
  editTodo,
}) {
  return (
    <div>
      <TodoForm addTodo={addTodo} todo={todo} editTodo={editTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        setClickedTodo={setClickedTodo}
      />
      <ControlPanel active={active} setVisibilityFilter={setVisibilityFilter} />
    </div>
  );
}

Main.propTypes = {
  todo: PropTypes.objectOf(Object).isRequired,
  todos: PropTypes.arrayOf(Object).isRequired,
  active: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  setClickedTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};
export default Main;
