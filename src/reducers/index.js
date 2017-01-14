import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import gameOfLifeReducer from './gameOfLifeReducer';

const rootReducer = combineReducers({
  gameOfLife: gameOfLifeReducer,
  routing: routerReducer,
});

export default rootReducer;
