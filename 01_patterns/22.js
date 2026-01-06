/* 
6 6 6 6 6 6 6 6 6 6 6 
6 5 5 5 5 5 5 5 5 5 6 
6 5 4 4 4 4 4 4 4 5 6 
6 5 4 3 3 3 3 3 4 5 6 
6 5 4 3 2 2 2 3 4 5 6 
6 5 4 3 2 1 2 3 4 5 6 
6 5 4 3 2 2 2 3 4 5 6 
6 5 4 3 3 3 3 3 4 5 6 
6 5 4 4 4 4 4 4 4 5 6 
6 5 5 5 5 5 5 5 5 5 6 
6 6 6 6 6 6 6 6 6 6 6 
 */
function pattern(N){
  for(let i=0;i<2*N-1;i++){
    let row = ""

    for(let j=0;j<2*N-1;j++){
      let top = i
      let left = j
      let bottom = 2*N-2-i
      let right = 2*N-2-j
      
      let minDist = Math.min(top,right,bottom,left)

      row += (N-minDist) + " "
    }
    console.log(row)
  }
}

pattern(6)