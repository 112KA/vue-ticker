<template>
  <div id="app">
    <h1>Ticker Plugin</h1>
    <p>count up : {{ count }}</p>
    <button @click="onClick">toggle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },

  mounted() {},

  methods: {
    tick() {
      this.count += 1;
    },

    onClick() {
      if (this.$ticker.running) {
        this.$ticker.remove(this.tick);
      } else {
        this.$ticker.add(this.tick);
      }
    }
  }
};
</script>



<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>