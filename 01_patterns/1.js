//outer loop for the rows
//inner loop for the columns
//print the pattern inside the inner loop
//observe for the symmetry

/* 
Pattern 
*****
*****
*****
*****
*****

 */

function pattern(n){
  for(let i=0;i<n;i++){
    let row = ""
    for(let j=0;j<n;j++){
      row += "*"
    }
    console.log(row)
  }
  
}

pattern(5)
