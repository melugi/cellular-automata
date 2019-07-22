import Grid from "./Grid";

let grid = new Grid(50, 10);
grid.initializeGrid();
let counter  = 0;

while (counter < 10) {
    grid.render();
    grid.update();
    console.log("===================================================================================")
    counter++;
}

