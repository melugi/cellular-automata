import Grid from '../src/Grid';

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

test('Grid Initilization', () => {
  let grid1 = new Grid(testData.length, testData.width);
  grid1.initializeGrid(testData.grid);

  expect(grid1.mapToStateArray()).toEqual(testData.grid);
});

test('Grid Equality', () => {
  let grid1 = new Grid(testData.length, testData.width);
  let grid2 = new Grid(testData.length, testData.width);
  grid1.initializeGrid(testData.grid);
  grid2.initializeGrid(testData.grid);

  expect(grid1.mapToStateArray()).toEqual(grid2.mapToStateArray());
  expect(JSON.stringify(grid1.mapToStateArray())).toEqual(JSON.stringify(grid2.mapToStateArray()));
});

test('Grid Updates', () => {
  let grid1 = new Grid(testData.length, testData.width);
  grid1.initializeGrid(testData.grid);
  grid1.update();

  expect(grid1.mapToStateArray()).toEqual(updatedTestData.grid);
});
