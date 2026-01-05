/* 
5
45
345
2345
12345
 */
function pattern(N){
  for(let i=0;i<=N;i++){
    let row = ""

    for(let j=N-i+1;j<=N;j++){
      row += j
    }

    console.log(row)
  }
}

/* 
E
DE
CDE
BCDE
ABCDE
 */
pattern(5)

function patternAlpha(N){
  for(let i=0;i<=N;i++){
    let row = ""

    for(let j=N-i;j<N;j++){
      row += String.fromCharCode(65+j)
    }

    console.log(row)
  }
}

patternAlpha(5)

function pattern2(N){
  for(let i=0;i<=N;i++){
    let row = ""
    let char = 65 + N-i

    for(let j=0;j<i;j++){
      row += String.fromCharCode(char++)
    }

    console.log(row)
  }
}

pattern2(7)