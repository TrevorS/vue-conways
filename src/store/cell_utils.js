const generateCells = (height, width) => {
  const newArray = [];

  for (let i = 0; i < height; i += 1) {
    const row = [];

    for (let j = 0; j < width; j += 1) {
      row.push(0);
    }

    newArray.push(row);
  }

  return newArray;
};

const executeTick = (oldCells) => {
  const newCells = [...oldCells];

  return newCells;
};

export { generateCells, executeTick };
