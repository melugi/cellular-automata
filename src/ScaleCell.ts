import Cell from './Cell';

export default class ScaleCell extends Cell {
  public scale: number;

  constructor(state: boolean, scale: number) {
    super(state);
    this.scale = scale;
  }
}