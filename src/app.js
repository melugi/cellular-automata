import Grid from "./Grid";
import Express from 'express';
import * as path from 'path';

const app = Express();

app.use('/public', Express.static(path.join(__dirname, '../public')));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/grid', function (request, response) {
  let grid = new Grid(200, 200);
  grid.initializeGrid();

  response.json(grid.stringify());
});

app.listen(3001, console.log("Listening on port 3001."));
