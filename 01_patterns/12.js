/* 
1        1
12      21
123    321
1234  4321
1234554321
 */
function pattern(N) {
  for (let i = 0; i <= N; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += j;
    }

    for (let j = 1; j <= 2 * (N - i); j++) {
      row += " ";
    }

    for (let j = i; j >= 1; j--) {
      row += j;
    }

    console.log(row);
  }
}

pattern(5);
