/* 
1
01
101
0101
10101
 */
function pattern(N) {
  for (let i = 1; i <= N; i++) {
    let row = "";
    let value = i % 2 === 0 ? 0 : 1;

    // if(i%2===0){
    //   value = 0 //even
    // }else{
    //   value = 1 //odd
    // }

    for (let j = 0; j < i; j++) {
      row += value;
      value = value === 1 ? 0 : 1;
      // if(value ===1){
      //   value = 0
      // }else{
      //   value = 1
      // }
    }
    console.log(row);
  }
}

pattern(5);
