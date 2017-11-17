const generateCells = (height, width, random) => {
  const newArray = [];

  for (let i = 0; i < height; i += 1) {
    const row = [];

    for (let j = 0; j < width; j += 1) {
      if (random) {
        const randomValue = Math.round(Math.random());

        row.push(randomValue);
      } else {
        row.push(0);
      }
    }

    newArray.push(row);
  }

  return newArray;
};

const clone2DArray = array =>
  array.map(row => row.slice());

const hasNeighbor = (cells, neighborY, neighborX) => {
  if (cells[neighborY] === undefined) {
    return 0;
  }

  if (cells[neighborY][neighborX] === undefined) {
    return 0;
  }

  return cells[neighborY][neighborX];
};

const countNeighbors = (cells, x, y) => {
  const nw = hasNeighbor(cells, y - 1, x - 1);
  const ne = hasNeighbor(cells, y - 1, x + 1);
  const n = hasNeighbor(cells, y - 1, x);

  const sw = hasNeighbor(cells, y + 1, x - 1);
  const se = hasNeighbor(cells, y + 1, x + 1);
  const s = hasNeighbor(cells, y + 1, x);

  const w = hasNeighbor(cells, y, x - 1);
  const e = hasNeighbor(cells, y, x + 1);

  return [nw, ne, n, w, e, sw, se, s].reduce(
    (total, value) => total + value, 0);
};

const executeTick = (oldCells) => {
  const newCells = clone2DArray(oldCells);

  for (let y = 0; y < oldCells.length; y += 1) {
    const row = oldCells[y];

    for (let x = 0; x < row.length; x += 1) {
      const isAlive = row[x] === 1;
      const neighbors = countNeighbors(oldCells, x, y);

      let newValue;

      if (isAlive) {
        if (neighbors < 2) {
          newValue = 0;
        } else if (neighbors === 2 || neighbors === 3) {
          newValue = 1;
        } else {
          newValue = 0;
        }
      } else {
        newValue = neighbors === 3 ? 1 : 0;
      }

      newCells[y][x] = newValue;
    }
  }

  return newCells;
};

const toggleCell = (oldCells, x, y) => {
  const newCells = clone2DArray(oldCells);

  const currentValue = oldCells[y][x];

  const newValue = currentValue === 1 ? 0 : 1;

  newCells[y][x] = newValue;

  return newCells;
};

export { generateCells, executeTick, toggleCell };
