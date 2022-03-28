import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "../constants/actions";

export function todo(todos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          completed: false,
          clicked: false,
        },
      ];
    case TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }
        return todo;
      });
    case REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.id);
    case EDIT_TODO:
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, text: action.text, clicked: action.clicked }
          : todo
      );
    default:
      return todos;
  }
}
