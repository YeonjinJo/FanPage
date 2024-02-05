import { createStore } from 'redux'
import { combineReducers } from 'redux'

import boardItemsReducer from '../modules/BoardItems';

const rootReducer = combineReducers({
    boardItemsReducer: boardItemsReducer,
  });
const store = createStore(rootReducer);

export default store