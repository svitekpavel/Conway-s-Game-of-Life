import { expect } from 'chai';

import shouldCellLive from '../shouldCellLive';

describe('shouldCellLive', () => {
  it('should return false for live cell with 0 live neighbours', () => {
    expect(shouldCellLive(1, 0)).to.equal(false);
  });

  it('should return false for live cell with 1 live neighbours', () => {
    expect(shouldCellLive(1, 1)).to.equal(false);

  });

  it('should return true for live cell with 2 live neighbours', () => {
    expect(shouldCellLive(1, 2)).to.equal(true);
  });

  it('should return true for live cell with 3 live neighbours', () => {
    expect(shouldCellLive(1, 3)).to.equal(true);
  });

  it('should return false for live cell with 4 live neighbours', () => {
    expect(shouldCellLive(1, 4)).to.equal(false);
  });

  it('should return false for live cell with 5 live neighbours', () => {
    expect(shouldCellLive(1, 5)).to.equal(false);
  });

  it('should return false for live cell with 6 live neighbours', () => {
    expect(shouldCellLive(1, 6)).to.equal(false);
  });

  it('should return false for live cell with 7 live neighbours', () => {
    expect(shouldCellLive(1, 7)).to.equal(false);
  });

  it('should return false for live cell with 8 live neighbours', () => {
    expect(shouldCellLive(1, 8)).to.equal(false);
  });

  it('should return false for dead cell with 0 live neighbours', () => {
    expect(shouldCellLive(0, 0)).to.equal(false);
  });

  it('should return false for dead cell with 1 live neighbours', () => {
    expect(shouldCellLive(0, 1)).to.equal(false);
  });

  it('should return false for dead cell with 2 live neighbours', () => {
    expect(shouldCellLive(0, 2)).to.equal(false);
  });

  it('should return true for dead cell with 3 live neighbours', () => {
    expect(shouldCellLive(0, 3)).to.equal(true);
  });

  it('should return false for dead cell with 4 live neighbours', () => {
    expect(shouldCellLive(0, 4)).to.equal(false);
  });

  it('should return false for dead cell with 5 live neighbours', () => {
    expect(shouldCellLive(0, 5)).to.equal(false);
  });

  it('should return false for dead cell with 6 live neighbours', () => {
    expect(shouldCellLive(0, 6)).to.equal(false);
  });

  it('should return false for dead cell with 7 live neighbours', () => {
    expect(shouldCellLive(0, 7)).to.equal(false);
  });

  it('should return false for dead cell with 8 live neighbours', () => {
    expect(shouldCellLive(0, 8)).to.equal(false);
  });

});
