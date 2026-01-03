/* 
1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
 */
function pattern(N){
  let value = 1
  for(let i=1;i<=N;i++){
    let row = ""
    // let value = 1
    for(let j=1;j<=i;j++){
      row += value + " "
      value++
    }

    console.log(row)
  }
}

pattern(5)