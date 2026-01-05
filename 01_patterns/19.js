/* 
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********
 */
function pattern(N){

    for(let i=0;i<N;i++){
      let row = ""

      for(let j=0;j<N-i;j++){
        row += "*"
      }

      for(let j=0;j<2*i;j++){
        row += " "
      }

      for(let j=0;j<N-i;j++){
        row += "*"
      }

      console.log(row)
    }

    for(let i=1;i<=N;i++){
      let row = ""

      for(let j=0;j<i;j++){
        row += "*"
      }

      for(let j=0;j<2*(N-i);j++){
        row += " "
      }

      for(let j=0;j<i;j++){
        row += "*"
      }

      console.log(row)
    }

}

pattern(5)
