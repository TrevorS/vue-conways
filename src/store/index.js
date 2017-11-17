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
    cells: generateCells(HEIGHT, WIDTH),
  },
  mutations: {
    tick(state) {
      const newCells = executeTick(state.cells);

      state.cells = newCells;
    },
    toggle(state, payload) {
      const { x, y } = payload;

      const newCells = toggleCell(state.cells, x, y);

      state.cells = newCells;
    },
    clear(state) {
      const newCells = generateCells(HEIGHT, WIDTH);

      state.cells = newCells;
    },
  },
});

export default store;
