/*!
 * vue-ticker v0.1.0 
 * (c) 2019 112KA
 * Released under the MIT License.
 */
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Ticker =
/*#__PURE__*/
function () {
  function Ticker() {
    _classCallCheck(this, Ticker);

    this.fps = 30; // console.log('this._fps: ', this._fps);

    this._tickList = [];

    this._defineFunctions();
  }

  _createClass(Ticker, [{
    key: "_defineFunctions",
    value: function _defineFunctions() {
      var _this = this;

      var prefixes = ["ms", "moz", "webkit", "o"];
      var i = prefixes.length;

      while (--i > -1 && !window.requestAnimationFrame) {
        window.requestAnimationFrame = window[prefixes[i] + "RequestAnimationFrame"];
        window.cancelAnimationFrame = window[prefixes[i] + "CancelAnimationFrame"] || window[prefixes[i] + "CancelRequestAnimationFrame"];
      } // console.log('this._RAF: ', this._RAF);


      this._tickHandler = function () {
        _this._requestId = window.requestAnimationFrame(_this._tickHandler);
        _this._lastMs = _this.time;
        var overlap = _this._lastMs - _this._nextMs;

        if (overlap >= 0) {
          // const t0 = this._nextMs;
          _this._nextMs += overlap + (overlap >= _this._gap ? 1 : _this._gap - overlap); // this.dispatch('tick', { type: 'tick', time: this._lastMs - this._startMs, dt: this._nextMs - t0 });

          _this._tickList.forEach(function (callback) {
            return callback();
          });
        }
      };
    }
  }, {
    key: "_start",
    value: function _start() {
      this.running = true;
      this._startMs = this.time;
      this._nextMs = this._startMs + this._gap;
      this._requestId = window.requestAnimationFrame(this._tickHandler);
    }
  }, {
    key: "_stop",
    value: function _stop() {
      this.running = false;
      window.cancelAnimationFrame(this._requestId);
    }
  }, {
    key: "add",
    value: function add(callback) {
      if (this._tickList.length == 0) {
        this._start();
      }

      this._tickList.push(callback);
    }
  }, {
    key: "remove",
    value: function remove(callback) {
      var index = this._tickList.indexOf(callback);

      if (index >= 0) {
        this._tickList.splice(index, 1);
      }

      if (this._tickList.length == 0) {
        this._stop();
      }
    }
  }, {
    key: "fps",
    get: function get() {
      return this._fps;
    },
    set: function set(v) {
      this._fps = v;
      this._gap = 1 / (v || 60) * 1000;
    }
  }, {
    key: "time",
    get: function get() {
      return Date.now() || new Date().getTime();
    }
  }]);

  return Ticker;
}();

var ticker = new Ticker();

var version = '0.1.0';

var install = function install(Vue) {
  Vue.prototype.$add = function (a, b) {
    return a + b;
  };

  Vue.prototype.$ticker = ticker;
};

var plugin = {
  install: install,
  version: version
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
