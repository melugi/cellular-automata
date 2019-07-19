import Grid from "./Grid";

let grid = new Grid(50, 10);

while (true) {
    grid.update();
    grid.render();
}

