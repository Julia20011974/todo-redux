import { initialState } from "../initialState";
import { visibilityFilter } from "./visibilityFilter";
import { todo } from "./todo";

export const rootReducer = (state = initialState, action) => {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todo(state.todos, action),
  };
};
