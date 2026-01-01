//reverse the string
// Hello --> olleH

function ReverseString(string){
  let stringArray = []
  let reversedString = ''

  for(let i =0;i<string.length;i++){
    stringArray[i] = string[i]
  }

  for(let j=0;j<stringArray.length;j++){
    reversedString += stringArray[stringArray.length-j-1]
  }

  return reversedString

}


//good solution using split,reverse, join

const StringReversal = (string)=>string.split('').reverse().join('')


const result = ReverseString("fayaz")
console.log(result)
console.log(StringReversal("vehicle cart"))