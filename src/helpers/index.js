import { visibilityFilters } from '../constants/actions';

export const getEditTodo = (todos) => todos.find((item) => item.clicked === true);

export const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case visibilityFilters[0]:
      return todos;
    case visibilityFilters[1]:
      return todos.filter((todo) => !todo.completed);
    case visibilityFilters[2]:
      return todos.filter((todo) => todo.completed);
    default:
      throw new Error(`Unknown filter ${filter}`);
  }
};
