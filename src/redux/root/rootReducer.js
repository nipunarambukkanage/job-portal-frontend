// rootReducer.js
import { combineReducers } from 'redux';
import sidebarReducer from '../reducers/sidebarReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  // Add more reducers here if needed
});

export default rootReducer;
