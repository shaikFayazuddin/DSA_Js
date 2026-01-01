const ArrayChunk = (arr, chunk)=>{
  if(chunk > arr.length){
    return "Provide a chunk smaller than the array length"
  }
  
  let finalArray = []

  let arrayIndex = 0

  while(arrayIndex < arr.length){ //can be replace by for(let i =0;i<arr.length;i += chunk)

    let minorArray = []

    for(let i=arrayIndex;i<chunk+arrayIndex &&i<arr.length; i++){      
        minorArray.push(arr[i])
  }

  finalArray.push(minorArray)
  arrayIndex += chunk

    // finalArray.push(arr.slice(arrayIndex, arrayIndex+chunk))
  // arrayIndex += chunk 
  }
return finalArray
}
// console.log(ArrayChunk([1,2,3,4,5,6,7],3))

var chunk = function(arr, size) {
    let arrayIndex = 0
    let FinalArray = []

    while(arrayIndex < arr.length){

        // let miniArray = []
        // for(let i = arrayIndex;i<arr.length && i<arrayIndex + size; i++){
        //     miniArray.push(arr[i])
        // }
        
        let miniArray = arr.slice(arrayIndex, size+arrayIndex)

        arrayIndex += size
        console.log(arrayIndex)
        FinalArray.push(miniArray)
    }
    
    return FinalArray
};

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk3 = (arr, size) => {
  return arr.reduce((chunkedArray, element) => {
    const lastChunk = chunkedArray[chunkedArray.length - 1];
    console.log("the last chunk is", lastChunk)
    if (!lastChunk || lastChunk.length === size) {
      chunkedArray.push([element]);
    } else {
      lastChunk.push(element);
    }
    return chunkedArray;
  }, []);
};

console.log(chunk3([11,22,37,43,52,6,7],3))
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk2 = (arr, size) => {
  const chunkedArray = [];

  for (let i = 0; i < arr.length; i += size) {
    chunkedArray.push(arr.slice(i, i + size));
  }

  return chunkedArray;
};

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
let chunk1= (arr, size) =>{
  const chunkedArray = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
}



