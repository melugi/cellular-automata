export default class Cell {
  constructor(state, x, y) {
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

  isAlive () {
    return this.state;
  }
}
