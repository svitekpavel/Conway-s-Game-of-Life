import shouldCellLive from './shouldCellLive';
import getLiveCellsAroundCell from './getLiveCellsAroundCell';

/**
 *
 */
export default function getNextEpoch (currectEpoch) {
  return currectEpoch.map((row, y) => row.map((cell, x) => {
    const liveCells = getLiveCellsAroundCell(x, y, currectEpoch);
    const shouldLive = shouldCellLive(currectEpoch[y][x], liveCells);
    return shouldLive ? 1 : 0;
  }));
}
