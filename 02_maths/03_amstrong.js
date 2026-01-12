

function armstrong(N){
  let sum = 0
  let originalNumber = N

  while(N>0){
    let lastDigit = N%10
    let cube = Math.pow(lastDigit,3)
    sum += cube

    N = Math.floor(N/10)
  }

  if(sum === originalNumber){
    return true
  }else{
    return false
  }
}

console.log(armstrong(153))
console.log(armstrong(371))

