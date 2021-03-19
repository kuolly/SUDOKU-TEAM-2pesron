const chalk = require('chalk');
const fs = require('fs');
const { prettyBoard } = require('./sudoku');

const sudoku = require('./sudoku');

function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split('\n')[puzzleNumber];
  console.table(prettyBoard(puzzle)); 
  return puzzle;
}
function readAndSolve(err, data) {
  if (err) {
    throw err;
  }
  let puzzle = sudokuParse(data);
  let solvedPuzzle = sudoku.solve(puzzle);
  if (sudoku.isSolved(solvedPuzzle)) {
    console.log("The board was solved!");
    console.table(sudoku.prettyBoard(solvedPuzzle));
  }
  else {
    console.log("The board wasn't solved :(");
  }
}

fs.readFile(
  './sudoku-puzzles.txt',
  'utf-8',
  readAndSolve
);


