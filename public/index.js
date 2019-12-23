var playing = false;

function getGrid() {
  $.get('/grid', function (data) {
    updateGrid(data);
  });
}

function updateGrid(data) {
  if (data.stable) {
    playing = false;
    return;
  }

  let $grid = $('#grid');
  $grid.empty();
  $grid.append(data.grid);

  if (playing) {
    stepForward();
  }
}


function play() {
  if (playing) {
    playing = false;
  } else {
    playing = true;
    stepForward();
  }
}

function stepForward() {
  $.get('/grid/step', function (data) {
    updateGrid(data);
  });
}

// TODO: Implement stepBackward once game state being saved is done.
function stepBackward() {
  $.get('/grid/back', function (data) {
    updateGrid(data);
  });
}

function reset () {
  $('#grid').empty();
  getGrid();
}

$(document).ready(function () {
  $("#stepForwardBtn").click(stepForward);
  $("#stepBackwardBtn").click(stepBackward);
  $("#playBtn").click(play);
  $("#resetBtn").click(reset);
  getGrid();
})
