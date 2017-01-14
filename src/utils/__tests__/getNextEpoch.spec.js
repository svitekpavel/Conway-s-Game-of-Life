import { expect } from 'chai';

import getNextEpoch from '../getNextEpoch';

const blinker1 = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

const blinker2 = [
  [0, 0, 0],
  [1, 1, 1],
  [0, 0, 0],
];

const toad1 = [
  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [1, 1, 1, 0],
  [0, 0, 0, 0],
];

const toad2 = [
  [0, 0, 1, 0],
  [1, 0, 0, 1],
  [1, 0, 0, 1],
  [0, 1, 0, 0],
];

// For names used in tests see
// https://en.wikipedia.org/wiki/Conway's_Game_of_Life#ExamplesOfPatterns
describe('getNextEpoch', () => {
  it('should return blinker2 as next epoch of blinker1', () => {
    expect(getNextEpoch(blinker1)).to.deep.equal(blinker2);
  });

  it('should return blinker1 as next epoch of blinker2', () => {
    expect(getNextEpoch(blinker2)).to.deep.equal(blinker1);
  });

  it('should return toad2 as next epoch of toad1', () => {
    expect(getNextEpoch(toad2)).to.deep.equal(toad1);
  });

  it('should return toad1 as next epoch of toad2', () => {
    expect(getNextEpoch(toad2)).to.deep.equal(toad1);
  });

});
