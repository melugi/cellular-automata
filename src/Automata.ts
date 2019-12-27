import Cell from './Cell';

export default class Automata {
  protected width: number;
  protected length: number;
  protected cells: Cell[][];

  /**
  * @param {int} width
  * @param {int} length
  */
  constructor(width, length) {
    this.width = width;
    this.length = length;
    this.cells = [];
  }

  mapToStateArray(): boolean[][] {
    return this.cells.map((cellRow) => {
      return cellRow.map((cell) => {
        return cell.isAlive();
      });
    });
  }

  /**
  * Initializes the grid as a two dimensional array of cells with an initial
  * state that's randomly generated.
  *
  * @param {Array} initialState
  */
  initializeGrid(initialState?: any[][]): void {
    let cells = [];

    for (let y = 0; y < this.length; y++) {
      let cellRow = [];

      for (let x = 0; x < this.width; x++) {
        let isCellAlive = (Math.random() <= 0.5);
        let cell = new Cell(isCellAlive, x, y);

        cellRow.push(cell);
      }

      cells.push(cellRow);
    }

    this.cells = cells;
  }

  /**
  * Goes through the grid and updates the state of each cell.
  */
  evolve(): void {
    throw new Error(`
        evolve has no been implemented. Please override and specify for an automata.
      `)
  }

  /**
   * Returns the neighboring cells of a cell. Cell positions are described by referring to a number on the grid
   * below. Where 5 is the current working cell.
   *
   * 7|8|9
   * - - -
   * 4|5|6
   * - - -
   * 1|2|3
   *
   * @param {Cell} cell
   */
  getCellNeighbors(cell): Cell[] {
    throw new Error(`
        getCellNeighbors has no been implemented. Please override and specify for an automata.
      `)
  }

  toHtml(): string {
    let html = '';
    let grid = this.cells;

    grid.forEach(gridRow => {
      gridRow.forEach(cell => {
        let cellState = cell.isAlive() ? 'alive' : 'dead';
        html += `<div class='${cellState} square-grid__cell square-grid__cell--${gridRow.length}'></div>`;
      });
    });

    return html;
  }
}

