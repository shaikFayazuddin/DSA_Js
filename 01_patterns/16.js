

function pattern(N){
  for(let i=0;i<=N;i++){
    let row = ""

    for(let j=0;j<=i;j++){
      row += String.fromCharCode(65+i)
    }
    console.log(row)
  }
}

pattern(5)