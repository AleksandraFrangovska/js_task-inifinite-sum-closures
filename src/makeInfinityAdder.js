'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  const allArgs = [];

  const adder = (arg) => {
    if (typeof arg === 'number') {
      allArgs.push(arg);

      return adder;
    }

    if (arg === undefined) {
      const totalSum = allArgs.reduce((sum, num) => sum + num, 0);

      allArgs.length = 0;

      return totalSum;
    }
  };

  return adder;
}

module.exports = makeInfinityAdder;
