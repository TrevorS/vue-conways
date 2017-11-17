<template>
  <div id="app">
    <h1>Conway's Game of Life</h1>
    <Grid/>
  </div>
</template>

<script>
import Grid from './components/Grid';

const App = {
  name: 'app',
  components: {
    Grid,
  },
};

export default App;
</script>

<style>
</style>
