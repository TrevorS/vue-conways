import Vue from 'vue';
import Vuex from 'vuex';

import {
  generateCells,
  executeTick,
  toggleCell,
} from './cell_utils';

Vue.use(Vuex);

const HEIGHT = 64;
const WIDTH = 64;

const store = new Vuex.Store({
  state: {
    cells: generateCells(HEIGHT, WIDTH, false),
    iterations: 0,
  },
  mutations: {
    tick(state) {
      const newCells = executeTick(state.cells);

      state.iterations += 1;

      state.cells = newCells;
    },
    toggle(state, payload) {
      const { x, y } = payload;

      const newCells = toggleCell(state.cells, x, y);

      state.cells = newCells;
    },
    clear(state) {
      const newCells = generateCells(HEIGHT, WIDTH);

      state.iterations = 0;

      state.cells = newCells;
    },
    random(state) {
      const newCells = generateCells(HEIGHT, WIDTH, true);

      state.iterations = 0;

      state.cells = newCells;
    },
  },
});

export default store;
