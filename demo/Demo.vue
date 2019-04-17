<template>
  <div id="app">
    <h1>Ticker Plugin Demo</h1>
    <p>count up : {{ count }}</p>
    <p>
      Fps:
      <input type="range" v-model="fps" min="1" max="60" step="1">
      <output id="output1">{{fps}}</output>
    </p>
    <button @click="onClick">toggle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      fps: 30
    };
  },

  mounted() {
    this.$ticker.add(this.tick);
  },

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
  },

  watch: {
    fps(v) {
      this.$ticker.fps = v;
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