import { connect } from 'react-redux';
import Main from './index';
import {
  toggleTodo, removeTodo, editTodo, addTodo,
  setVisibilityFilter,
} from '../../actions/index';
import { getEditTodo, getVisibleTodos } from '../../helpers';

const mapStateToProps = (state) => ({
  todo: getEditTodo(state.todos),
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  active: (filter) => filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  removeTodo: (id) => dispatch(removeTodo(id)),
  editTodo: (id, text, clicked) => dispatch(editTodo(id, text, clicked)),
  setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
  setClickedTodo: (todo) => dispatch(editTodo(todo.id, todo.text, true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
