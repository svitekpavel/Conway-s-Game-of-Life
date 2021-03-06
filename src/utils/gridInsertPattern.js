export const patterns = {
  block: [
    [1, 1],
    [1, 1],
  ],
  beacon: [
    [1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, 1],
  ],
  blinker1: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  blinker2: [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  toad1: [
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  toad2: [
    [0, 0, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [0, 1, 0, 0],
  ],
  glider: [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
  ],
  lwss: [
    [1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 1, 1, 1],
  ]
};

/**
 * Insert one of specific patterns into the grid. If there is no such pattern
 * as specified by patterName, unchaged grid is returned.
 *
 * Available patterns: block, beacon, blinker1, blinker2, toad1, toad2,
 * glider, lwss
 */
export default function gridInsertPattern(patternName, grid, offsetX, offsetY) {
  const maxY = grid.length;
  const maxX = grid[0].length;
  const newGrid = grid.map((row,y) => row.map((col,x) => grid[y][x]));

  if (Object.prototype.hasOwnProperty.call(patterns, patternName)) {
    patterns[patternName].map((row, y) => row.map((cell, x) => {
      if (offsetX+x < maxX && offsetY+y < maxY) {
        newGrid[offsetY+y][offsetX+x] = cell;
      }
    }));
  }
  return newGrid;
}
