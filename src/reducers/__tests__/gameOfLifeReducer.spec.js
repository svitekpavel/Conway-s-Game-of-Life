import { expect } from 'chai';

import gameOfLifeReducer from '../gameOfLifeReducer';
import {
  SET_EPOCH,
  SET_EVOLUTION_RUNNING,
} from '../../constants/actionTypes';
import initialState from '../initialState';

const grid = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

const customState = {
  gameOfLife: {
    evolutionRunning: true,
    grid: grid,
  },
  foo: 'bar',
};

describe('gameOfLifeReducer', () => {
  it('should return initialState on @@INIT action with undefined state', () => {
    const action = { type: '@@INIT' };
    const state = gameOfLifeReducer(undefined, action);

    expect(state).to.deep.equal(initialState.gameOfLife);
  });

  it('should return unchanged state on @@INIT action with defined state', () => {
    const action = { type: '@@INIT' };
    const state = gameOfLifeReducer(customState, action);

    expect(state).to.deep.equal(customState);
  });

  it('should return state with new epoch on \'SET_EPOCH\' action', () => {
    const action = { type: SET_EPOCH, epoch: grid };
    const state = gameOfLifeReducer(undefined, action);

    expect(state.epoch).to.deep.equal(grid);
  });

  it('should return state with evolutionRunning=false on \'SET_EVOLUTION_RUNNING=false\' action', () => {
    const action = { type: SET_EVOLUTION_RUNNING, evolutionRunning: false };
    const state = gameOfLifeReducer(undefined, action);

    expect(state.evolutionRunning).to.deep.equal(false);
  });

  it('should return state with evolutionRunning=true on \'SET_EVOLUTION_RUNNING=true\' action', () => {
    const action = { type: SET_EVOLUTION_RUNNING, evolutionRunning: true };
    const state = gameOfLifeReducer(undefined, action);

    expect(state.evolutionRunning).to.deep.equal(true);
  });
});
