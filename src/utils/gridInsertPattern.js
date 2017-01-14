const patterns = {
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

export default function gridInsertPattern(patternName, grid, offsetX, offsetY) {
  patterns[patternName].map((row, y) => row.map((cell, x) => grid[offsetY+y][offsetX+x] = cell));
  return grid;
}
