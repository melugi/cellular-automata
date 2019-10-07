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
  grid = new Grid(20, 20);
  grid.initializeGrid();

  response.send(grid.htmlify());
});

app.put('/grid', function (request, response) {
  if (typeof grid !== 'undefined') {
    grid.update();
  } else {
    throw new Error('Grid is not initialized');
  }
});

app.listen(3001, console.log("Listening on port 3001."));
