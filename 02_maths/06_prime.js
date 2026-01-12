
function primeCheck(N){
  let count =0
  for(let i=0;i*i<=N;i++){
    if(N%i===0){
      count++

      if(N/i!==i){
        count++
      }
    }
  }
  return count === 2
}

let result = primeCheck(7)
console.log(result)