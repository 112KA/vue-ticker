# vue-ticker
Ticker plugin for Vue.js

## Example
https://112ka.github.io/example/vue-ticker/

## Install
```
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-ticker.umd.min.js"></script>
```
or

```
yarn add vue-ticker
or
npm install vue-ticker
```
```
import Vue from 'vue'
import VueTicker from 'vue-ticker'

Vue.use(VueTicker)
```

## Usage

```js :App.vue

<script>

export default {
  mounted() {
    //set fps (default:30)
    this.$ticker.fps = 60

    //add to ticker
    this.$ticker.add(this.tickFunction)

    //remove from ticker
    this.$ticker.remove(this.tickFunction)

  },

  methods: {
    tickFunction() {
      this.count += 1;
    },
  }
}
```

## Licensing
MIT
