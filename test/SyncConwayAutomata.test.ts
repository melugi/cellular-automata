import SyncConwayAutomata from '../src/SyncConwayAutomata';

const testData = {
  length: 3,
  width: 3,
  grid: [
    [true, false, false],
    [true, false, true],
    [false, false, false]
  ]
};

const updatedTestData = {
  length: 3,
  width: 3,
  grid: [
    [false, true, false],
    [false, true, false],
    [false, false, false]
  ]
}

test('SyncConwayAutomata Initilization', () => {
  let grid1 = new SyncConwayAutomata(testData.length, testData.width);
  grid1.initializeGrid(testData.grid);

  expect(grid1.mapToStateArray()).toEqual(testData.grid);
});

test('SyncConwayAutomata Equality', () => {
  let grid1 = new SyncConwayAutomata(testData.length, testData.width);
  let grid2 = new SyncConwayAutomata(testData.length, testData.width);
  grid1.initializeGrid(testData.grid);
  grid2.initializeGrid(testData.grid);

  expect(grid1.mapToStateArray()).toEqual(grid2.mapToStateArray());
  expect(JSON.stringify(grid1.mapToStateArray())).toEqual(JSON.stringify(grid2.mapToStateArray()));
});

test('SyncConwayAutomata Updates', () => {
  let grid1 = new SyncConwayAutomata(testData.length, testData.width);
  grid1.initializeGrid(testData.grid);
  grid1.evolve();

  expect(grid1.mapToStateArray()).toEqual(updatedTestData.grid);
});
