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
      expect(setEpoch().type).to.equal(SET_EPOCH);
    });

    it('should return action with epoch=[0, 1, 0, 0]', () => {
      expect(setEpoch([0, 1, 0, 0]).epoch).to.deep.equal([0, 1, 0, 0]);
    });
  });

  describe('setEvolutionRunning', () => {
    it('should return action with type=SET_EVOLUTION_RUNNING', () => {
      expect(setEvolutionRunning().type).to.equal(SET_EVOLUTION_RUNNING);
    });

    it('should return action with evolutionRunning=true', () => {
      expect(setEvolutionRunning(true).evolutionRunning).to.equal(true);
    });

    it('should return action with evolutionRunning=false', () => {
      expect(setEvolutionRunning(false).evolutionRunning).to.equal(false);
    });
  });

});
