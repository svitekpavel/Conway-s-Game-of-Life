import {
  SET_EPOCH,
  SET_EVOLUTION_RUNNING,
} from '../constants/actionTypes';

export function setEpoch(nextEpoch) {
  return {
    type: SET_EPOCH,
    epoch: nextEpoch,
  }
}

export function setEvolutionRunning(isRunning) {
  return {
    type: SET_EVOLUTION_RUNNING,
    evolutionRunning: isRunning,
  }
}
