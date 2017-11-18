import Vue from 'vue';
import Vuex from 'vuex';

import { HEIGHT, WIDTH } from './constants';
import { generateCells } from './cell_utils';

import mutations from './mutations';

Vue.use(Vuex);

const strict = process.env.NODE_ENV !== 'production';

const state = {
  cells: generateCells(HEIGHT, WIDTH, false),
  iterations: 0,
};

const store = new Vuex.Store({
  state,
  mutations,
  strict,
});

export default store;
