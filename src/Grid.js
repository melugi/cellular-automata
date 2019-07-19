import Cell from "./Cell";

export default class Grid {
  
  /**
  * @param {int} x
  * @param {int} y
  */
  constructor (x, y) {
    this.width = x;
    this.length = y;
    this.cells = [];
    this.initializeGrid();
  }
  
  /**
  * Initializes the grid as a two dimensional array of cells with an initial
  * state that's randomly generated.
  */
  initializeGrid () {
    let cells = [];
    
    for (let y = 1; y <= this.length; y++) {
      let cellRow = [];
      for (let x = 1; x <= this.width; x++) {
        let isCellAlive = (Math.random() <= 0.5);
        let cell = new Cell(isCellAlive);
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
    let oldCells = this.cell;
    console.log(this.cell);

    oldCells.forEach( (cellRow) => {
      let newRow = [];
      cellRow.forEach( (cell) => {
        let neighbors = this.getCellNeighbors(cell);

        neighbors.filter( (cell) => {
          return cell.isAlive();
        });

        let neighborCount = neighbors.count();
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
   * Returns the neighboring cells of a particular x, y coordinate pair
   * @param {int} x 
   * @param {int} y 
   */
  getCellNeighbors (x, y) {
    let neighbors = [];
    
    if (y - 1 >= 0) {
      if (x - 1 >= 0) {
        neighbors.push(this.cells[y - 1][x-1]);
      }
      if (x + 1 <= this.width) {
        neighbors.push(this.cells[y - 1][x-1]);
      }
      neighbors.push(this.cells[y - 1][x]);
    }

    if (y + 1 <= this.length) {
      if (x - 1 >= 0) {
        neighbors.push(this.cells[y + 1][x - 1]);
      }
      if (x + 1 <= this.width) {
        neighbors.push(this.cells[y + 1][x - 1]);
      }
      neighbors.push(this.cells[y + 1][x]);
    }

    return neighbors;
  }

  render () {
    this.cells.forEach( cellRow => {
      let stringRow = '';
      cellRow.forEach( cell => {
        if (cell.isAlive()) {
          stringRow += '#';
        } else {
          stringRow += ' ';
        }
      });
      console.log(stringRow + '\n');
    });
  }
}
