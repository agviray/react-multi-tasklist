import { combineReducers } from 'redux';
import allListsReducer from './allListsReducer';
import selectedListReducer from './selectedListReducer';

const rootReducer = combineReducers({
  allLists: allListsReducer,
  selectedList: selectedListReducer,
});

export default rootReducer;
