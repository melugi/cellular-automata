export default class Cell {
  constructor(state) {
    this.state = state;
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
