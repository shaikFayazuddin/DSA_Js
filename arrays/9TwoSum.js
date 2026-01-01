const TwoSum = (arr,target)=>{
  // let answer = []


  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){ //my mistake started j from 0 and that gave duplicate results
      if(arr[i]+arr[j]===target){
        console.log("the numbers are",arr[i],arr[j])
        console.log(i,j)
        // answer.push(i,j)
        return [i,j]
      }
    }
  }
  return []
}

console.log(TwoSum([2,7,11,15],9)) //answer should be [0,5] index 0->1, 5-->6

[11,15,2,8,9,3,7]