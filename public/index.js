function getGrid() {
  $.get('/grid', function (data) {
    let $grid = $('#grid');
    $grid.empty();
    $grid.append(data);
  });
}

function stepForward() {
  $.get('/grid/step', function (data) {
    let $grid = $('#grid');
    $grid.empty();
    $grid.append(data);
  });
}

// TODO: Implement stepBackward once game state being saved is done.
function stepBackward() {

}

$(document).ready(function () {
  $("#stepForwardBtn").click(stepForward);
  getGrid();
})
