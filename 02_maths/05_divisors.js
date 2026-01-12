//brute force
function divisors(N){
  const result = []
  for(let i=0;i<=N;i++){
    if(N%i === 0){
      result.push(i)
    }
  }
  return result
}

console.log(divisors(36))


//optimal approach

function divisorsOptimal(N){
  const result = []

  for(let i=0;i*i<=N;i++){
    if(N%i===0){
      result.push(i)
      if(i !== N/i){
      result.push(N/i)
    }
    }
  }

  return result.sort((a,b)=>a-b)
}
console.log(divisorsOptimal(36))