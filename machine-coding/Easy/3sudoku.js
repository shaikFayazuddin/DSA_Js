const solvedSudoku = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9],
];


console.log(checkSudoku(solvedSudoku));

function helperFunction(arr) {
  const unique = new Set();
  for (let num of arr) {
    if (unique.has(num)) {
      return false;
    }
    unique.add(num);
  }
  return true;
}

function checkSudoku(board) {
  //check if board is filled full
  //check for row
  //check for column
  //check for box
  //get a helper function which will check for array-->row, column,row
  for (let row of board) {
    if (row.includes(0)) {
      console.log("fill all rows and cols")
      return false;
    }
  }
  console.log("all rows and cols are filled")
    //check for row
    for (let row = 0; row < 9; row++) {
      if (!helperFunction(board[row])){
        console.log("there's a duplicate number in row: " , row, board[row])
        return false
      }
    }
    console.log("rows are correct")

    //check for col
    for (let row = 0; row < 9; row++) {
      const column = [];
      for (let col = 0; col < 9; col++) {
        column.push(board[col][row]);
      }
      if (!helperFunction(column)) {
        return false
      }
    }
    
    console.log("cols are correct")

    //check for box
    for(let row =0;row<9;row += 3){
      for(let col = 0;col<9;col += 3){
        let box = []

        for(let r=0;r<3;r++){
          for ( let c=0;c<3;c++){
            box.push(board[row + r][col + c])
          }
        }
        if (!helperFunction(box)) {
        return false
      }
      }
    }
    console.log("all boxes are correct")
    return true
  }

