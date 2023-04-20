import { types } from './types';
import { v4 as uuidv4 } from 'uuid';

export const displayModal = (modalDetails) => {
  return {
    type: types.MODAL_DISPLAYED,
    payload: modalDetails,
  };
};

export const hideModal = (modalDetails) => {
  return {
    type: types.MODAL_HIDDEN,
    payload: modalDetails,
  };
};

export const loadSavedLists = (savedLists) => {
  return {
    type: types.INITIAL_LISTS_LOADED,
    payload: savedLists,
  };
};

export const saveNewList = (newList) => {
  return {
    type: types.NEW_LIST_SAVED,
    payload: newList,
  };
};

export const saveUpdatedList = (updatedList) => {
  return {
    type: types.UPDATED_LIST_SAVED,
    payload: updatedList,
  };
};

export const createList = () => {
  return {
    type: types.LIST_CREATED,
    payload: uuidv4(),
  };
};

export const deleteList = (listId) => {
  return {
    type: types.LIST_DELETED,
    payload: listId,
  };
};

export const selectList = (list) => {
  return {
    type: types.LIST_SELECTED,
    payload: list,
  };
};

export const updateTitle = (title) => {
  return {
    type: types.TITLE_UPDATED,
    payload: title,
  };
};

export const addItem = (text) => {
  return {
    type: types.ITEM_ADDED,
    payload: {
      newItemId: uuidv4(),
      newItemText: text,
      initialStatus: false,
    },
  };
};

export const deleteItem = (itemId) => {
  return {
    type: types.ITEM_DELETED,
    payload: itemId,
  };
};

export const updateItem = (idOfUpdatedItem, updatedItemText) => {
  return {
    type: types.ITEM_UPDATED,
    payload: {
      idOfUpdatedItem: idOfUpdatedItem,
      updatedItemText: updatedItemText,
    },
  };
};

export const markItemComplete = (itemId) => {
  return {
    type: types.ITEM_COMPLETED,
    payload: itemId,
  };
};
