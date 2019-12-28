export default class Cell {
  state: boolean;

  constructor(state: boolean) {
    this.state = state;
  }

  die() {
    this.state = false;
  }

  live() {
    this.state = true;
  }

  isAlive(): boolean {
    return this.state;
  }
}
