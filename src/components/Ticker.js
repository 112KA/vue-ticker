class Ticker {
  constructor() {

    this.fps = 30;
    // console.log('this._fps: ', this._fps);
    this._tickList = []

    this._defineFunctions();
  }

  _defineFunctions() {

    const prefixes = ["ms", "moz", "webkit", "o"];
    let i = prefixes.length;

    while (--i > -1 && !window.requestAnimationFrame) {
      window.requestAnimationFrame = window[prefixes[i] + "RequestAnimationFrame"];
      window.cancelAnimationFrame = window[prefixes[i] + "CancelAnimationFrame"] || window[prefixes[i] + "CancelRequestAnimationFrame"];
    }
    // console.log('this._RAF: ', this._RAF);


    this._tickHandler = () => {
      this._requestId = window.requestAnimationFrame(this._tickHandler);

      this._lastMs = this.time;

      let overlap = this._lastMs - this._nextMs;

      if (overlap >= 0) {
        // const t0 = this._nextMs;
        this._nextMs += overlap + (overlap >= this._gap ? 1 : this._gap - overlap);
        // this.dispatch('tick', { type: 'tick', time: this._lastMs - this._startMs, dt: this._nextMs - t0 });
        this._tickList.forEach(callback => callback())
      }
    }
  }

  get fps() {
    return this._fps;
  }

  set fps(v) {
    this._fps = v;
    this._gap = 1 / (v || 60) * 1000;
  }

  get time() {
    return Date.now() || new Date().getTime();
  }

  _start() {
    this.running = true
    this._startMs = this.time;
    this._nextMs = this._startMs + this._gap;
    this._requestId = window.requestAnimationFrame(this._tickHandler);
  }

  _stop() {
    this.running = false
    window.cancelAnimationFrame(this._requestId);
  }

  add(callback) {
    if (this._tickList.length == 0) {
      this._start()
    }

    this._tickList.push(callback)
  }

  remove(callback) {
    const index = this._tickList.indexOf(callback)
    if (index >= 0) {
      this._tickList.splice(index, 1)
    }
    if (this._tickList.length == 0) {
      this._stop()
    }
  }
}

export default new Ticker()