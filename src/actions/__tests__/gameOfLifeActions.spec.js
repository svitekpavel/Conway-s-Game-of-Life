import { expect } from 'chai';

import {
  SET_EPOCH,
  SET_EVOLUTION_RUNNING,
} from '../../constants/actionTypes';
import {
  setEpoch,
  setEvolutionRunning,
} from './../gameOfLifeActions';


describe('gameOfLifeActions', () => {
  describe('setEpoch', () => {
    it('should return action with type=SET_EPOCH', () => {
      const action = setEpoch();
      expect(action.type).to.equal(SET_EPOCH);
    });

    it('should return action with epoch=[0, 1, 0, 0]', () => {
      const action = setEpoch([0, 1, 0, 0]);
      expect(action.epoch).to.deep.equal([0, 1, 0, 0]);
    });
  });

  describe('setEvolutionRunning', () => {
    it('should return action with type=SET_EVOLUTION_RUNNING', () => {
      const action = setEvolutionRunning();
      expect(action.type).to.equal(SET_EVOLUTION_RUNNING);
    });

    it('should return action with evolutionRunning=true', () => {
      const action = setEvolutionRunning(true);
      expect(action.evolutionRunning).to.equal(true);
    });

    it('should return action with evolutionRunning=false', () => {
      const action = setEvolutionRunning(false);
      expect(action.evolutionRunning).to.equal(false);
    });
  });

});
