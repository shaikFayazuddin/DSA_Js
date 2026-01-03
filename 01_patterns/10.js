/* 
*
**
***
****
*****
****
***
**
*
 */
function pattern(N) {
  function erectPattern(n) {
    for (let i = 0; i < n; i++) {
      let row = "";
      for (let j = 0; j <= i; j++) {
        row += "*";
      }
      console.log(row);
    }
  }

  function invertedPattern(n) {
    // console.log(n)
    for (let i = 1; i <= n; i++) {
      let row = "";
      for (let j = N; j > i; j--) {
        row += "*";
      }
      console.log(row);
    }
  }

  erectPattern(N);
  invertedPattern(N - 1);
}



function pattern2(N){
  for(let i=0;i<2*N-1;i++){
    let row = ""
    let stars = i

    if(i>N){
      stars = 2*N-i
    }

    for(let j=0;j<stars;j++){
      row += "$"
    }
    console.log(row)
  }
}

pattern(5);
pattern2(6)
