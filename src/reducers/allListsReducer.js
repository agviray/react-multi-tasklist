import { types } from '../actions/types';

const INITIAL_STATE = [];

const allListsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.INITIAL_LISTS_LOADED:
      return [...action.payload];
    case types.NEW_LIST_SAVED:
      return [action.payload, ...state];
    case types.UPDATED_LIST_SAVED:
      const editedList = { ...action.payload, wasAltered: false };
      return [editedList, ...state.filter((list) => list.id !== editedList.id)];
    case types.LIST_CREATED:
      return [
        {
          id: action.payload,
          title: '',
          items: [],
          view: 'all',
          wasAltered: false,
        },
        ...state,
      ];
    case types.LIST_DELETED:
      return [...state].filter((list) => list.id !== action.payload);

    default:
      return state;
  }
};

export default allListsReducer;
