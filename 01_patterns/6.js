/* 
123456
12345
1234
123
12
1
 */

function pattern(n){
  for(let i=n;i>=0;i--){
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

function pattern1(n){
  for(let i=1;i<=n;i++){
    let row = ""
    for(let j=0;j<n-i+1;j++){
      row += j
    }
    console.log(row)
  }
}

pattern(6)