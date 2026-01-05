/* 
    A    
   ABA   
  ABCBA  
 ABCDCBA 
ABCDEDCBA
 */
function pattern(N){
  for(let i=0;i<N;i++){
    let row = ""

    for(let j=0;j<N-i-1;j++){
      row += " "
    }
    
    let char = 0
    let breakpoint = i

    for(let j=1;j<=2*i+1;j++){
      row += String.fromCharCode(65+char)
      if(j<=breakpoint){
        char++
      }else{
        char--
      }
    }

    for(let j=0;j<N-i-1;j++){
      row += " "
    }



    console.log(row)
  }
}

pattern(5)