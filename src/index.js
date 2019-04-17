const version = '__VERSION__'

import ticker from './components/Ticker';

const install = Vue => {

  Vue.prototype.$add = (a, b) => {
    return a + b
  }

  Vue.prototype.$ticker = ticker
}

const plugin = {
  install,
  version
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
