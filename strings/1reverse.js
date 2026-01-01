// function ReverseString(string){
//   let newString = ""

//   for(let i = string.length-1;i>=0;i--){
//     newString += string[i]   
//   }
//   return newString
// }

function ReverseString(string){
  const newString = []

  for(let i = string.length-1;i>=0;i--){
    newString.push(string[i])
  }
  return newString.join('')
}


const result = ReverseString("hello")
console.log(result)