import Cell from "./Cell";
import Automata from "./Automata";

export default class SyncConwayAutomata extends Automata {
  /**
  * @param {int} width
  * @param {int} length
  */
  constructor(width, length) {
    super(length, width);
  }

  /**
  * Goes through the grid and updates the state of each cell.
  */
  evolve(): void {
    let newCells = [];
    let oldCells = this.cells;

    oldCells.forEach((cellRow, y) => {
      let newRow = [];
      cellRow.forEach((cell, x) => {
        let neighbors = this.getCellNeighbors(x, y);

        let liveNeighbors = neighbors.filter(cell => {
          return cell.isAlive();
        });

        let neighborCount = liveNeighbors.length;
        let newCell = Object.assign(Object.create(Object.getPrototypeOf(cell)), cell);

        if (newCell.isAlive() && neighborCount > 3) {
          newCell.die();
        }
        else if (newCell.isAlive() && neighborCount < 2) {
          newCell.die();
        }
        else if (!newCell.isAlive() && neighborCount == 3) {
          newCell.live();
        }

        newRow.push(newCell);
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
  getCellNeighbors(x: number, y: number): Cell[] {
    let neighbors = [];

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

    // Position 4
    if (x - 1 >= 0) {
      neighbors.push(this.cells[y][x - 1]);
    }
    // Position 6
    if (x + 1 < this.width) {
      neighbors.push(this.cells[y][x + 1]);
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

    return neighbors;
  }
}
