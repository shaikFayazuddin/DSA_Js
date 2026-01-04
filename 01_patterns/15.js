/* 
ABCDEF
ABCDE
ABCD
ABC
AB
A
 */
function pattern(N){
  for(let i=0;i<=N;i++){
    let row = ""

    for(let j=0;j<N-i+1;j++){
      row += String.fromCharCode(65+j)
    }
    console.log(row)
  }
}

pattern(5)