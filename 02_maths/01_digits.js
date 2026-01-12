
function countDigits(N){
  let count = 0

  while(N>0){
    count++
    N = Math.trunc(N/10) //Math.floor
  }

  return count
}
console.log(countDigits(-483234343))
//notes
// the time complexity for N/M would be O(logM(N))


//optimal
function countDigitsOptimal(N){
  return Math.trunc(Math.log10(N)+1)
}
console.log(countDigitsOptimal(3456))


