import Cell from "./Cell";

export default class Grid {

  /**
  * @param {int} width
  * @param {int} length
  */
  constructor (width, length) {
    this.width = width;
    this.length = length;
    this.cells = [];
  }

  mapToStateArray() {
    return this.cells.map( (cellRow) => {
      return cellRow.map( (cell) => {
        return cell.isAlive();
      });
    });
  }

  toArray() {
    return this.cells;
  }

  /**
  * Initializes the grid as a two dimensional array of cells with an initial
  * state that's randomly generated.
  */
  initializeGrid () {
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
  update () {
    let newCells = [];
    let oldCells = this.cells;

    oldCells.forEach( cellRow => {
      let newRow = [];
      cellRow.forEach( cell => {
        let neighbors = this.getCellNeighbors(cell);

        let liveNeighbors = neighbors.filter( cell => {
          return cell.isAlive();
        });

        let neighborCount = liveNeighbors.length;
        if (cell.isAlive() && neighborCount > 3) {
          cell.die();
        }
        else if (cell.isAlive() && neighborCount < 2) {
          cell.die();
        }
        else if (!cell.isAlive() && neighborCount === 3) {
          cell.live();
        }

        newRow.push(cell);
      });

      newCells.push(newRow);
    });

    this.cells = newCells;
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
  getCellNeighbors (cell) {
    let neighbors = [];
    let x = cell.x;
    let y = cell.y;

    if (y - 1 >= 0) {
      // Position 7
      if (x - 1 >= 0) {
        neighbors.push(this.cells[y - 1][x - 1]);
      }

      // Position 8
      neighbors.push(this.cells[y - 1][x]);

      // Position 9
      if (x + 1 < this.width) {
        neighbors.push(this.cells[y - 1][x + 1]);
      }
    }

    if (y + 1 < this.length) {
      // Position 1
      if (x - 1 >= 0) {
        neighbors.push(this.cells[y + 1][x - 1]);
      }

      // Position 2
      neighbors.push(this.cells[y + 1][x]);

      // Position 3
      if (x + 1 < this.width) {
        neighbors.push(this.cells[y + 1][x + 1]);
      }
    }

    // Position 4
    if (x - 1 >= 0) {
      neighbors.push(this.cells[y][x - 1]);
    }
    // Position 6
    if (x + 1 < this.width) {
      neighbors.push(this.cells[y][x + 1]);
    }

    return neighbors;
  }

  stringify () {
    return JSON.stringify(this.cells);
  }

  htmlify () {
    let html = '';
    let grid = this.cells;

    grid.forEach( gridRow => {
      gridRow.forEach( cell => {
        let cellState = cell.isAlive() ? 'alive' : 'dead';
        html += `<div class='${cellState} square-grid__cell square-grid__cell--${gridRow.length}'></div>`;
      });
    });

    return html;
  }
}
