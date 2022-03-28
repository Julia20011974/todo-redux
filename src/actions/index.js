import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
} from "../constants/actions";

let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text,
  };
};

export const editTodo = (id, text, clicked) => {
  return {
    type: EDIT_TODO,
    id,
    text,
    clicked,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    id,
  };
};

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}
