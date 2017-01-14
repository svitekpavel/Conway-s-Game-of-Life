import { expect } from 'chai';

import getLiveCellsAroundCell from '../getLiveCellsAroundCell';

const grid = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];

describe('getLiveCellsAroundCell', () => {
  it('should return 2 for center cell', () => {
    expect(getLiveCellsAroundCell(2, 2, grid)).to.equal(2);
  });

  it('should return 0 for the top left corner cell', () => {
    expect(getLiveCellsAroundCell(0, 0, grid)).to.equal(0);
  });

  it('should return 0 for the top right corner cell', () => {
    expect(getLiveCellsAroundCell(4, 0, grid)).to.equal(0);
  });

  it('should return 1 for the top center cell', () => {
    expect(getLiveCellsAroundCell(2, 0, grid)).to.equal(1);
  });

  it('should return 0 for the bottom left corner cell', () => {
    expect(getLiveCellsAroundCell(0, 4, grid)).to.equal(0);
  });

  it('should return 0 for the bottom right corner cell', () => {
    expect(getLiveCellsAroundCell(4, 4, grid)).to.equal(0);
  });

  it('should return 1 for the bottom center cell', () => {
    expect(getLiveCellsAroundCell(2, 4, grid)).to.equal(1);
  });
});
