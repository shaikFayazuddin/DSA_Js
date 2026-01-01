/* 
1
12
123
1234
12345
 */

function pattern(n){
  for(let i=1;i<=n;i++){
    let row = ""
    // let value = 1
    for(let j=1;j<=i;j++){
      row += j
      // row += value
      // value++
    }
    console.log(row)
  }
}

pattern(5)