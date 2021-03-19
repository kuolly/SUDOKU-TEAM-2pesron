
const sudokuParse = require('./runner')

// const sudokuParse = require('./runner')


function solve(boardString) {
  let conPuz = prettyBoard(boardString);

  sodokoSolver(conPuz);

  function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
  }

  function sodokoSolver(data) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] == '-') {
          for (let k = 1; k <= 9; k++) {
            if (isValid(data, i, j, k)) {
              data[i][j] = `${k}`;
            if (sodokoSolver(data)) {
             return true;
            } else {
             data[i][j] = '-';
            }
           }
         }
         return false;
       }
     }
    }
    return true;
    }
  
  return conPuz;
}

// console.table(solve('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  return true;
}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  let arr = board.split('');
  let subarr = [];
  let size = 9;
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    subarr[i] = arr.slice((i*size), (i*size) + size);
  }

  return subarr;
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
