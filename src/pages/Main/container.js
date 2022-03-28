import { connect } from "react-redux";
import { Main } from "./index";
import { toggleTodo, removeTodo, editTodo, addTodo } from "../../actions/index";
import { visibilityFilters } from "../../constants/actions";
import { setVisibilityFilter } from "../../actions/index";

const getEditTodo = (todos) => {
  return todos.find((item) => item.clicked === true);
};

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    default:
      throw new Error("Unknown filter " + filter);
  }
};

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
  setClickedTodo: (todo) => {
    return dispatch(editTodo(todo.id, todo.text, true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
