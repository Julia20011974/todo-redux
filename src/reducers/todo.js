import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from '../constants/actions';

function todo(todos, action) {
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
      return todos.map((item) => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    case REMOVE_TODO:
      return todos.filter((item) => item.id !== action.id);
    case EDIT_TODO:
      return todos.map((item) => (item.id === action.id
        ? { ...item, text: action.text, clicked: action.clicked }
        : item));
    default:
      return todos;
  }
}

export default todo;
