
function countDigits(N){
  let count = 0

  while(N>0){
    // let lastDigit = N%10
    // console.log(lastDigit)
    count++
    N = Math.floor(N/10)
  }

  return count
}
console.log(countDigits(483234343))
//notes
// the time complexity for N/M would be O(logM(N))


//optimal
function countDigitsOptimal(N){
  return Math.floor(Math.log10(N)+1)
}
console.log(countDigitsOptimal(3456))


