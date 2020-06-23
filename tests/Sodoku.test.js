import { Sudoku } from './../src/sudoku.js';

describe('Sudoku board', () => {

  test('should determine if each row/colum contains 9 numbers', () => {
    let sudoku = new Sudoku([1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9]);
    expect(sudoku.colum.length).toEqual(9);
    expect(sudoku.row.length).toEqual(9);
  });

});