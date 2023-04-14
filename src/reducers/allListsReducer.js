import { types } from '../actions/types';

const INITIAL_STATE = [];
const allListsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INITIAL_LISTS_LOADED:
      return 'hi';
    case types.NEW_LIST_SAVED:
      return 'hi';
    case types.UPDATED_LIST_SAVED:
      return 'hi';
    case types.LIST_DELETED:
      return 'hi';

    default:
      return state;
  }
};

export default allListsReducer;
