import { SET_VISIBILITY_FILTER } from '../constants/actions';

function visibilityFilter(state, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
export default visibilityFilter;
