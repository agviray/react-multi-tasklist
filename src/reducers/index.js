import { combineReducers } from 'redux';
import allListsReducer from './allListsReducer';
import activeListReducer from './activeListReducer';

const rootReducer = combineReducers({
  allLists: allListsReducer,
  // activeList: activeListReducer,
});

export default rootReducer;
