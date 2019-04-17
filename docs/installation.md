# Installation

## Direct Download / CDN

https://unpkg.com/vue-ticker/dist/vue-ticker 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-ticker@{{ $version }}/dist/vue-ticker.js
 
Include vue-ticker after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-ticker/dist/vue-ticker.js"></script>
```

## NPM

```sh
$ npm install vue-ticker
```

## Yarn

```sh
$ yarn add vue-ticker
```

When used with a module system, you must explicitly install the `vue-ticker` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-ticker from 'vue-ticker'

Vue.use(vue-ticker)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-ticker` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-ticker.git node_modules/vue-ticker
$ cd node_modules/vue-ticker
$ npm install
$ npm run build
```

