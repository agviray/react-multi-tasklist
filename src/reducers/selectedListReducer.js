import { types } from '../actions/types';

const selectedListReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LIST_SELECTED:
      return action.payload;
    case types.TITLE_UPDATED:
      return { ...state, title: action.payload };
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
      };
    default:
      return state;
  }
};

export default selectedListReducer;
