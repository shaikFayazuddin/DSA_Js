/* 
A 
A B 
A B C 
A B C D 
A B C D E 
A B C D E F 
 */
function pattern(N){
  for(let i=0;i<=N;i++){
    let row = ""
    for(let j = 0; j<=i;j++){
      row += String.fromCharCode(65 + j) + " "; 
    }

    console.log(row)
  }
}

pattern(5)