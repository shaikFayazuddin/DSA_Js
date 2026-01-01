function CountChar(string){
  const CountObj = {}
  const ourString = string.replace(/\s+/g,"").toLowerCase()

  for(let i =0;i<ourString.length;i++){
    if(CountObj[ourString[i]]){
      CountObj[ourString[i]]++
    }else{
      CountObj[ourString[i]] = 1
    }
  }
  return CountObj
}

const result = CountChar("hello world")
console.log(result)