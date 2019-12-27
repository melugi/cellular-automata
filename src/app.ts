import AutomataManager from "./AutomataManager";
import Express from 'express';
import * as path from 'path';

const app = Express();
const manager = new AutomataManager();

app.use('/public', Express.static(path.join(__dirname, '../public')));
app.use('/jquery', Express.static(path.join(__dirname, '../node_modules/jquery/dist')));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/grid', function (request, response) {
  manager.initializeSyncConwayAutomata(10, 10);

  response.json({
    'grid': manager.toHtml(),
    'stable': false
  });
});

app.get('/grid/step', function (request, response) {
  manager.evolve();

  response.json({
    'grid': manager.toHtml(),
    'stable': manager.isStable()
  });
});

app.get('/grid/back', function (request, response) {
  manager.revert();

  response.json({
    'grid': manager.toHtml(),
    'stable': manager.isStable()
  });
});

app.listen(3001, () => console.log("Listening on port 3001."));
