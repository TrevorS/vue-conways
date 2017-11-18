<template>
  <div class="grid">
    <div class="controls">
      <button @click="start" :disabled="running">Start</button>
      <button @click="stop" :disabled="stopped">Stop</button>
      <button @click="tick" :disabled="running">Tick</button>
      <button @click="clear" :disabled="running">Clear</button>
      <button @click="random" :disabled="running">Random</button>

      <span class="iterations">
        {{ iterations }} iterations
      </span>
    </div>

    <div v-for="(r, y) in cells" :key="`row-${y}`" class="row">
      <cell v-for="(c, x) in r" :key="`cell-${x}`" :value="c" :x="x" :y="y"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Cell from './Cell';

const Grid = {
  name: 'Grid',
  data: () => ({
    timeoutId: null,
  }),
  computed: {
    stopped: function stopped() {
      return this.timeoutId === null;
    },
    running: function running() {
      return !this.stopped;
    },
    ...mapState([
      'cells',
      'iterations',
    ]),
  },
  components: {
    Cell,
  },
  methods: {
    start: function start() {
      this.timeoutId = window.setInterval(this.tick, 500);
    },
    stop: function stop() {
      clearTimeout(this.timeoutId);

      this.timeoutId = null;
    },
    tick: function tick() {
      this.$store.commit('tick');
    },
    clear: function clear() {
      this.$store.commit('clear');
    },
    random: function random() {
      this.$store.commit('random');
    },
  },
};

export default Grid;
</script>

<style scoped>
.controls {
  padding: 10px 0 25px 0;
}

.iterations {
  padding-left: 25px;
}

.row {
  height: 10px;
}
</style>
