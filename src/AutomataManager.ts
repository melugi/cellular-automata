import SyncConwayAutomata from "./SyncConwayAutomata";

export default class AutomataManager {

  initializeSyncConwayAutomata (x, y, initialState) {
    this.automata = new SyncConwayAutomata(x, y);
    this.automata.initializeGrid(initialState);

    this.history = [];
  }

  evolve () {
    this.history.push(this.automata);
    this.automata.evolve();
  }

  revert () {
    if (!this.history.length) {
      throw new Error(`
        There is no previous state for this automata.
      `);
    }

    this.automata = this.history.pop();
  }

  isStable () {
    previousGrid = this.history.pop();
    let isStable = JSON.stringify(this.automata.mapToStateArray()) === JSON.stringify(previousGrid.mapToStateArray())

    return isStable;
  }

  toHtml () {
    return this.automata.toHtml();
  }
}

