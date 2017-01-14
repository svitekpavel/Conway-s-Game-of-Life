/**
 * Rules:
 * Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
 * Any live cell with two or three live neighbours lives on to the next generation.
 * Any live cell with more than three live neighbours dies, as if by overpopulation.
 * Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 */
export default function shouldCellLive (cell, liveCellsAround) {
  // live cell rules
  if (cell === 1) {
    if (liveCellsAround === 2 || liveCellsAround === 3) {
      return true;
    }
    return false
  } else {
    if (liveCellsAround === 3) {
      return true;
    }
  }
  return false;
}
