import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import gameOfLifeReducer from './gameOfLifeReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  gameOfLife: gameOfLifeReducer,
  routing: routerReducer,
});

export default rootReducer;
