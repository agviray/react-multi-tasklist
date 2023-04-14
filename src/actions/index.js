import { types } from './types';
import uuid from 'uuid';

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

export const deleteList = (listId) => {
  return {
    type: types.LIST_DELETED,
    payload: listId,
  };
};
