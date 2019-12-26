import Automata from "./Automata";
import SyncConwayAutomata from "./SyncConwayAutomata";

import cloneDeep from 'lodash/cloneDeep';

export default class AutomataManager {
  private automata: Automata;
  private history: Automata[];

  initializeSyncConwayAutomata (x: number, y: number, initialState?: any[]) {
    this.automata = new SyncConwayAutomata(x, y);
    this.automata.initializeGrid(initialState);

    this.history = [];
  }

  evolve (): void {
    let record = cloneDeep(this.automata);

    this.history.push(record);
    this.automata.evolve();
  }

  revert (): void {
    if (!this.history.length) {
      throw new Error(`
        revert Error: No history.
      `);
    }

    this.automata = this.history.pop();
  }

  isStable (): boolean {
    if (!this.history.length) {
      throw new Error (`
        isStable Check Error: No history.
      `)
    }

    let previousGrid = this.history.pop();
    let isStable = JSON.stringify(this.automata.mapToStateArray()) === JSON.stringify(previousGrid.mapToStateArray())

    return isStable;
  }

  toHtml (): string {
    return this.automata.toHtml();
  }
}

