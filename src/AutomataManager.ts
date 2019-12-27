import Automata from "./Automata";
import SyncConwayAutomata from "./SyncConwayAutomata";

import cloneDeep from 'lodash/cloneDeep';

export default class AutomataManager {
  protected automata: Automata;
  protected history: Automata[] = new Array();

  initializeSyncConwayAutomata(x: number, y: number, initialState?: boolean[][]) {
    this.automata = new SyncConwayAutomata(x, y);
    this.automata.initializeGrid(initialState);
  }

  evolve(): void {
    if (this.history.length && this.isStable()) {
      throw new Error(`
        evolve Error: Automata is already stable.
      `);
    }

    let record = cloneDeep(this.automata);

    this.history.push(record);
    this.automata.evolve();
  }

  revert(): void {
    if (!this.history.length) {
      throw new Error(`
        revert Error: No history.
      `);
    }

    this.automata = this.history.pop();
  }

  isStable(): boolean {
    if (!this.history.length) {
      throw new Error(`
        isStable Check Error: No history.
      `)
    }

    let previousGrid = this.history.slice(-1)[0];
    let isStable = JSON.stringify(this.automata.mapToStateArray()) === JSON.stringify(previousGrid.mapToStateArray())

    return isStable;
  }

  toHtml(): string {
    return this.automata.toHtml();
  }
}

