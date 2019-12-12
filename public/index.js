var playing = false;

function getGrid() {
  $.get('/grid', function (data) {
    updateGrid(data);
  });
}

function updateGrid(data) {
  let $grid = $('#grid');
  $grid.empty();
  $grid.append(data);

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

}

$(document).ready(function () {
  $("#stepForwardBtn").click(stepForward);
  $("#playBtn").click(play);
  getGrid();
})
