import Grid from "./Grid";
import Express from 'express';
import * as path from 'path';

const app = Express();
var grid;

app.use('/public', Express.static(path.join(__dirname, '../public')));
app.use('/jquery', Express.static(path.join(__dirname, '../node_modules/jquery/dist')));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/grid', function (request, response) {
  grid = new Grid(10, 10);
  grid.initializeGrid();

  response.json({
    'grid': grid.htmlify(),
    'stable': false
  });
});

app.get('/grid/step', function (request, response) {
  let oldGrid = grid.mapToStateArray();
  grid.update();

  let stable = JSON.stringify(grid.mapToStateArray()) === JSON.stringify(oldGrid);

  response.json({
    'grid': grid.htmlify(),
    'stable': stable
  });
});

app.listen(3001, console.log("Listening on port 3001."));
