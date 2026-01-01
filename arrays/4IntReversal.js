const IntReversal = (number)=>Number(number.toString().split("").reverse().join(""))
//there's is a issue with the above code and that is that it can't handle negative numbers

const numberReverse = (number)=>{
  console.log(Math.sign(number))
  const reversedNumberString = number.toString().split("").reverse().join("")
  return parseInt(reversedNumberString) * Math.sign(number)
}

console.log(IntReversal(-1234)) 
console.log(numberReverse(-1234)) 

