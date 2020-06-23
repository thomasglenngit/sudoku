import { Sudoku } from './../src/sudoku.js';

describe('Sudoku board', () => {

  test('should determine if each row/colum contains 9 numbers', () => {
    let sudoku = new Sudoku([1,2,3,4,5,6,7,8,9], [1,2,3,4,5,6,7,8,9]);
    expect(sudoku.column.length).toEqual(9);
    expect(sudoku.row.length).toEqual(9);
  });

  test("total should add to 45", () => {
    let totalRow = new Sudoku([0], [1,2,3,4,5,6,7,8,9]);
    let total = totalRow.checkRowCount();
    expect(totalRow.checkRowCount()).toEqual(total);
  });
});