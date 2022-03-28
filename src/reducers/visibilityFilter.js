import { SET_VISIBILITY_FILTER } from "../constants/actions";

export function visibilityFilter(state, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
