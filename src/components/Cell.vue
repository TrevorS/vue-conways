<template>
  <div
    class="cell"
    :class="{ alive: isAlive }"
    v-on:click="toggle">
  </div>
</template>

<script>
const Cell = {
  name: 'Cell',
  props: [
    'value',
    'x',
    'y',
  ],
  computed: {
    isAlive: function isAlive() {
      return this.value === 1;
    },
  },
  methods: {
    toggle: function toggle() {
      const { x, y } = this;

      this.$store.commit('toggle', { x, y });
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
