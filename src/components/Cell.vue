<template>
  <div class="cell" v-bind:class="{ alive: isAlive }">
  </div>
</template>

<script>
const Cell = {
  name: 'Cell',
  props: ['value'],
  computed: {
    isAlive: function isAlive() {
      return this.value === 1;
    },
  },
};

export default Cell;
</script>

<style scoped>
.cell {
  display: inline-block;
  background-color: white;
  height: 10px;
  width: 10px;
}

.alive {
  background-color: black;
}
</style>
