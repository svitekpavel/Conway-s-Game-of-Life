/**
 * Returns count of live cells around cells at specified [x, y] in grid
 */
export default function getLiveCellsAroundCell (x, y, grid) {
  const minX = x-1 < 0 ? 0 : x-1;
  const minY = y-1 < 0 ? 0 : y-1;
  const maxX = x+1 >= grid[y].length ? grid[y].length-1 : x+1;
  const maxY = y+1 >= grid.length ? grid.length-1 : y+1;

  let cells = [];
  // add current row to the array
  // we have to add +1, as Array.slice does not include the element at end index
  cells.push.apply(cells, grid[y].slice(minX, maxX+1));

  // add the previous row if there is one
  if (minY != y) {
    // we have to add +1, as Array.slice does not include the element at end index
    cells.push.apply(cells, grid[minY].slice(minX, maxX+1));
  }
  // add the next row if there is one
  if (maxY != y) {
    // we have to add +1, as Array.slice does not include the element at end index
    cells.push.apply(cells, grid[maxY].slice(minX, maxX+1));
  }

  return cells.reduce((acc, i) => i==1 ? acc+1 : acc, 0) - grid[y][x];
}
