import Grid from "./Grid";
import Express from 'express';
import * as path from 'path';

const app = Express();
var grid;

app.use('/public', Express.static(path.join(__dirname, '../public')));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/grid', function (request, response) {
  grid = new Grid(200, 200);
  grid.initializeGrid();

  response.json(grid.htmlify());
});

app.put('/grid', function (request, response) {
  if (typeof grid !== 'undefined') {
    grid.update();
  } else {
    throw new Error('Grid is not initialized');
  }
});

app.listen(3001, console.log("Listening on port 3001."));
