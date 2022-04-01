import initialState from '../initialState';
import visibilityFilter from './visibilityFilter';
import todo from './todo';

const rootReducer = (state = initialState, action) => ({
  visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  todos: todo(state.todos, action),
});
export default rootReducer;
