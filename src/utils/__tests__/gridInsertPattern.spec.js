import { expect } from 'chai';

import createGrid from '../createGrid';
import gridInsertPattern, { patterns } from '../gridInsertPattern';

describe('gridInsertPattern', () => {
  it('should insert block pattern to position [0, 0]', () => {
    const grid = createGrid(2, 2);
    const resultGrid = gridInsertPattern('block', grid, 0, 0);

    expect(resultGrid).to.deep.equal(patterns.block);
  });

  it('should insert beacon pattern to position [0, 0]', () => {
    const grid = createGrid(4, 4);
    const resultGrid = gridInsertPattern('beacon', grid, 0, 0);

    expect(resultGrid).to.deep.equal(patterns.beacon);
  });

  it('should insert blinker1 pattern to position [0, 0]', () => {
    const grid = createGrid(3, 3);
    const resultGrid = gridInsertPattern('blinker1', grid, 0, 0);

    expect(resultGrid).to.deep.equal(patterns.blinker1);
  });

  it('should insert lwss pattern to position [0, 0]', () => {
    const grid = createGrid(5, 4);
    const resultGrid = gridInsertPattern('lwss', grid, 0, 0);

    expect(resultGrid).to.deep.equal(patterns.lwss);
  });

  it('should insert block pattern to position [1, 2]', () => {
    const grid = createGrid(4, 4);
    const expectedGrid = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
    ];
    const resultGrid = gridInsertPattern('block', grid, 1, 2);

    expect(resultGrid).to.deep.equal(expectedGrid);
  });

});
