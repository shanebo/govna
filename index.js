/**
* Execute function when no new function is on timed delay
* @param {Function} fn
* @param {Number} delay
* @returns {Function}
*/

const debounce = (fn, delay = 200) => {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(fn.bind(this, ...args), delay);
  }
}


/**
* Execute function at most at every interval
* @param {Function} fn
* @param {Number} interval
* @returns {Function}
*/

const throttle = (fn, interval = 200) => {
  let timer;
  let last;

  return function(...args) {
    const now = Date.now();
    const run = () => {
      last = now;
      fn.apply(this, args);
    }

    if (now < (last + interval)) {
      clearTimeout(timer);
      timer = setTimeout(run, interval);
    } else {
      run();
    }
  }
}


/**
* From https://stackoverflow.com/a/44779316
* Execute function when animation frame is available
* @param {Function} fn
* @returns {Function}
*/

const tick = (fn) => {
  let ticking;

  return function(...args) {
    if (ticking) {
      return;
    }

    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      fn.apply(this, args);
    });
  };
}


export {
  debounce,
  throttle,
  tick
};
