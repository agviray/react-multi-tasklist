import { types } from '../actions/types';

const selectedListReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LIST_SELECTED:
      return action.payload;
    case types.TITLE_UPDATED:
      return { ...state, title: action.payload, wasAltered: true };
    case types.ITEM_ADDED:
      const { newItemId, newItemText, initialStatus } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: newItemId,
            text: newItemText,
            isComplete: initialStatus,
          },
        ],
        wasAltered: true,
      };
    case types.ITEM_DELETED:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload)],
        wasAltered: true,
      };
    case types.ITEM_UPDATED:
      const { idOfUpdatedItem, updatedItemText } = action.payload;
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === idOfUpdatedItem) {
            return { ...item, text: updatedItemText };
          } else {
            return item;
          }
        }),
        wasAltered: true,
      };
    case types.ITEM_COMPLETED:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload) {
            return { ...item, isComplete: true };
          } else {
            return item;
          }
        }),
        wasAltered: true,
      };
    case types.VIEW_CHANGED:
      return { ...state, view: action.payload };
    default:
      return state;
  }
};

export default selectedListReducer;
