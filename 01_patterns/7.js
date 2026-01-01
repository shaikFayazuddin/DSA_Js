/* 
0    *      [4,1,4]
1   ***     [3,3,3]
2  *****    [2,5,2]
3 *******   [1,7,1]
4*********  [0,9,0]
 */

function pattern(n){
  for(let i=0;i<n;i++){
    let row = ""
  
  for(let j=0;j<n-i-1;j++){
    row += " "
  }

    for(let j=0;j<2*i+1;j++){
      row += "*"
    }

    for(let j=0;j<n-i-1;j++){
    row += " "
  }

    console.log(row)
  }
}

pattern(7)