export default function createGrid (x, y) {
  return Array.apply(null, Array(y)).map((row) => Array.apply(null, Array(x)).map(Number.prototype.valueOf,0));
}