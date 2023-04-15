import { types } from '../actions/types';

const selectedListReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LIST_SELECTED:
      return action.payload;
    case types.TITLE_UPDATED:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default selectedListReducer;
