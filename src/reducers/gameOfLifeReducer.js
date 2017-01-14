import {
  SET_EPOCH,
  SET_EVOLUTION_RUNNING,
} from '../constants/actionTypes';
import initialState from './initialState';

export default function gameOfLifeReducer(state = initialState.gameOfLife, action) {
  switch (action.type) {
    case SET_EPOCH:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return Object.assign({}, state, { epoch: action.epoch });

    case SET_EVOLUTION_RUNNING:
      return Object.assign({}, state, { evolutionRunning: action.evolutionRunning });

    default:
      return state;
  }
}
