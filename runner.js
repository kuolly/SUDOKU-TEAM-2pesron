const fs = require("fs");
const fs = require('fs');
const { prettyBoard } = require('./sudoku');
// Use functions from sudoku.js file.
const sudoku = require("./sudoku");


function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.split("\n")[puzzleNumber];
  console.log(puzzle);
function sudokuParse(content, puzzleNumber = 1) {
  let puzzle = content.split('\n')[puzzleNumber];
  // console.table(prettyBoard(puzzle)); 

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
    console.log(sudoku.prettyBoard(solvedPuzzle));
  } else {
    console.log("The board wasn't solved :(");
  }
  console.table(solvedPuzzle);
}

// Reads file and sends data from it to the readAndSolve function.
fs.readFile("./sudoku-puzzles.txt", "utf-8", readAndSolve);

module.exports = { sudokuParse };

