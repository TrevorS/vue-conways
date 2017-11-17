<template>
  <div class="grid">
    <div v-for="(r, i) in cells" :key="`row-${i}`" class="row">
      <cell v-for="(c, j) in r" :key="`cell-${j}`" :value="c"/>
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
