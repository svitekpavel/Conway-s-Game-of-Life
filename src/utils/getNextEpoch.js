import shouldCellLive from './shouldCellLive';
import getLiveCellsAroundCell from './getLiveCellsAroundCell';

/**
 * Rerturns a new 2-dimensional epoch array calculated based on currentEpoch
 */
export default function getNextEpoch (currectEpoch) {
  return currectEpoch.map((row, y) => row.map((cell, x) => {
    const liveCells = getLiveCellsAroundCell(x, y, currectEpoch);
    const shouldLive = shouldCellLive(currectEpoch[y][x], liveCells);
    return shouldLive ? 1 : 0;
  }));
}
