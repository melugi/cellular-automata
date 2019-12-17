export default class Cell {
  state: boolean;
  x: number;
  y: number;

  constructor(state: boolean, x: number, y: number) {
    this.state = state;
    this.x = x;
    this.y = y;
  }

  die () {
    this.state = false;
  }

  live () {
    this.state = true;
  }

  isAlive (): boolean {
    return this.state;
  }
}
