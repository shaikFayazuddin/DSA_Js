function memoize(fn) {
   const cache = {};
  
   return function(...args) {
    const key = JSON.stringify(args); //'[2,3]'
    
    if (key in cache) {
      return cache[key];
    }
    
    // const result = fn.apply(this,args);
    const result = fn(...args);
    cache[key] = result;
    
    return result;
  }
  
}

let functionCount = 0
const memoizedSum = memoize(function(a, b) {
  functionCount += 1
  return a + b;
});

console.log(memoizedSum(2, 3)); // Output: Computing sum, 5
console.log(memoizedSum(2, 3)); // Output: 5
console.log(functionCount)