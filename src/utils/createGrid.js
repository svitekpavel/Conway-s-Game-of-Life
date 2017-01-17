/**
 * Creates a 2-dimensional array of size [x, y] filled with zeros
 */
export default function createGrid (x, y) {
  return Array.apply(null, Array(y)).map(() => Array.apply(null, Array(x)).map(Number.prototype.valueOf,0));
}
