import {
  SET_SPEED,
  SET_EPOCH,
  SET_EVOLUTION_RUNNING,
} from '../constants/actionTypes';

export function setEpoch(nextEpoch) {
  return {
    type: SET_EPOCH,
    epoch: nextEpoch,
  };
}

export function setEvolutionRunning(isRunning) {
  return {
    type: SET_EVOLUTION_RUNNING,
    evolutionRunning: isRunning,
  };
}

export function setSpeed(speed) {
  return {
    type: SET_SPEED,
    speed: speed,
  }
}
