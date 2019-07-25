import Grid from "./Grid";
import Express from 'express';

const app = Express();

app.get('/', function (request, response) {
  let grid = new Grid(200, 200);
  grid.initializeGrid();

  response.json(grid.stringify());
});

app.listen(3001, console.log("Listening on port 3001."));
