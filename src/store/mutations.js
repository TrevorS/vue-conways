import { HEIGHT, WIDTH } from './constants';

import {
  TOGGLE,
  TICK,
  CLEAR,
  RANDOM,
} from './mutation_types';

import {
  generateCells,
  executeTick,
  toggleCell,
} from './cell_utils';

const mutations = {
  [TICK]: (state) => {
    const newCells = executeTick(state.cells);

    state.iterations += 1;

    state.cells = newCells;
  },
  [TOGGLE]: (state, payload) => {
    const { x, y } = payload;

    const newCells = toggleCell(state.cells, x, y);

    state.cells = newCells;
  },
  [CLEAR]: (state) => {
    const newCells = generateCells(HEIGHT, WIDTH);

    state.iterations = 0;

    state.cells = newCells;
  },
  [RANDOM]: (state) => {
    const newCells = generateCells(HEIGHT, WIDTH, true);

    state.iterations = 0;

    state.cells = newCells;
  },
};

export default mutations;
