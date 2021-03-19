
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));

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
              data[i][j] = chalk.blue(`${k}`);
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
  
    let tempArr = [];
  for (let i = 0; i < conPuz.length; i++) {
   tempArr.push(conPuz[i].join(''));
  }
  return tempArr.join('');
}

//console.log(solve('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'));


function isSolved(board) {
  return true;
}


function prettyBoard(board) {
  let arr = board.split('');
  let subarr = [];
  let size = 9;
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    subarr[i] = arr.slice((i*size), (i*size) + size);
  }

  return subarr;
}

module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
