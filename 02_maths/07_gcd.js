
function gcd(a,b){
  let result =1

  for(let i=1;i<=Math.min(a,b);i++){

    if(a%i===0 && b%i===0){
      result = i
    }
  }

  return result
}

console.log(gcd(20,15))

function gcdBetter(a,b){
  let result = 1

  for(let i=Math.min(a,b);i>=1;i--){
    if(a%i===0 && b%i===0){
      result = i
      break
    }
  }
  return result
}
console.log(gcdBetter(20,15))


function gcdOptimal(a,b){
  while(a>0 && b>0){

    if(a>b){
      a = a%b
      console.log("the a is",a)
    }else{
      b = b%a
      console.log("the b is",b)
    }

    
  }
  if(a===0){
      return b
    }

    return a
}

console.log(gcdOptimal(11,114))