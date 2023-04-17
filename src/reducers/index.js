import { combineReducers } from 'redux';
import allListsReducer from './allListsReducer';
import selectedListReducer from './selectedListReducer';
import modalReducer from './modalReducer';
const rootReducer = combineReducers({
  allLists: allListsReducer,
  selectedList: selectedListReducer,
  modal: modalReducer,
});

export default rootReducer;
