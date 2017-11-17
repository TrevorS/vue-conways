<template>
  <div class="grid">
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
  computed: mapState([
    'cells',
  ]),
  components: {
    Cell,
  },
};

export default Grid;
</script>

<style scoped>
</style>
