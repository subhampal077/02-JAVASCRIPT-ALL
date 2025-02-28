
function memoization() {
  const cache = {};
  function mathCalculation(x) {
    if (cache[x]) {
      return cache[x];
    } else {
        const startTime = Date.now();
        let currentTime = startTime;
        while (startTime + 500 > currentTime) {
          currentTime = Date.now();
          console.log("Calculating", currentTime - startTime);
        }
        const result = Math.sqrt(x);
        cache[x] = result;
        return result;
    }
  }
  return mathCalculation;
}
const memoizationCalculation = memoization();
