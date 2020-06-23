export function Sudoku(colum, row, grid){
  this.column = column;
  this.row = row;
  this.grid = grid;
  this.userInput = [];
}

// function counter 

Sudoku.prototype.checkRowCount = function() {
  let rowTotal = 0;
  this.rowTotal.forEach(function(number){
    rowTotal += number;
  })
    return rowTotal;
}

Sudoku.prototype.checkColumnCount = function() {
  let columnTotal = 0;
  this.columnTotal.forEach(function(number){
    total += number;
  })
    return columnTotal;
}

Sudoku.prototype.checkSubGridCount = function() {
  let subTotal = 0;
  this.subTotal.forEach(function(number){
    total += number;
  })
    return subTotal;
}

// export function buildBoard(){
//   let grid = [
//   [2,0,0,0,0,0,0,0,0]
//   [0,0,0,0,3,0,4,0,0]
//   [0,0,1,5,0,0,0,6,0]
//   [0,0,7,0,8,0,0,0,0]
//   [0,0,0,0,0,0,9,0,0]
//   [0,1,0,0,2,0,0,7,0]
//   [0,0,0,0,3,0,0,0,0]
//   [0,6,0,0,0,0,5,0,0]
//   [0,0,0,4,0,0,0,0,7]
//   ]
// }
  
// export function supplyGrid (){
//   supply = [1,2,3,4,5,6,7,8,9]
//   row = 0
//   column = 0
//   value = 0
//   index = 0
// }
