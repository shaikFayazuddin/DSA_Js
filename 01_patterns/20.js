/* 
*       *
**     **
***   ***
**** ****
*********
**** ****
***   ***
**     **
*       *
 */
function pattern(N){

  for(let i=0;i<=2*N-1;i++){
    let row = ""

    


    let stars = i
    if(i>N){
      stars = 2*N-i
    }

    let space = 2*(N-stars)

    for(let j=1;j<=stars;j++){
      row += "*"
    }

    for(let j=1;j<space;j++){
      row += " "
    }
    for(let j=1;j<=stars;j++){
      row += "*"
    }
    console.log(row)
  }

}

pattern(5)
