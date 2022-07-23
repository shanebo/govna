# govna

Debounce, throttle, and tick wrappers to govern when a function executes. See [helpful visual examples](https://css-tricks.com/debouncing-throttling-explained-examples/) of what debounce, throttle, and tick do.

## Install

`npm install govna`

## Usage

```js
import { debounce, throttle, tick } from 'govna';

const foo = (str) => str;
const delay = 200;

const debouncedFn = debounce(foo, delay);
const throttledFn = throttle(foo, delay);
const tickedFn = tick(foo);

debouncedFn('debounced');
throttledFn('throttled');
tickedFn('ticked');
```
