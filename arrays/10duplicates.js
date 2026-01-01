function Duplicates(array){
  const filteredArray = []

  for(let i=0;i<array.length;i++){
    let isDuplicate = false

    for(let j=0;j<filteredArray.length;j++){
      if(array[i]===filteredArray[j]){
        isDuplicate = true
        break
      }
    }

    if(!isDuplicate){
      filteredArray.push(array[i])
    }
  }

  return filteredArray
}
//////////////////
function Duplicates5(array){
  const filteredArray = []

  for(let i=0;i<array.length;i++){
    if(!filteredArray.includes(array[i])){
      filteredArray.push(array[i])
    }
  }

  return filteredArray
}
///////////////////
function Duplicates1(array){
  return array.filter((value,index)=>array.indexOf(value)===index)
}
///////////////

function Duplicates2(array){
  return array.reduce((acc,item)=>{
    if(!acc.includes(item)){
      acc.push(item)
    }
    return acc
  },[])
}


function Duplicates3(array){
  return [...new Set(array)]
}
const ourArray = [
  'f', 's', 'f', 'k', 'a', 's', 'f', 'u', 'o', 'e',
  'r', 'q', 'i', 'w', 'y', 'e', 'r', 't', 'w', 'q',
  'p', 'q', 'o', 'w', 'c', 'n', 'v', 'd', 'f', 'a',
  's', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o',
  'p', 'p', 'o', 'i', 'u', 'y', 't', 'r', 'e', 'w',
  'q', 'a', 's', 'd', 'f', 'f', 'd', 'a', 's', 'z',
  'x', 'c', 'v', 'g', 'b', 'h', 'n', 'j', 'k', 'm',
  'm', 'k', 'j', 'n', 'l'
]
const result = Duplicates5(ourArray)
console.log(result)