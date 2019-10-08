function getGrid() {
  $.get('/grid', function (data) {
    let $grid = $('#grid');
    $grid.empty();
    $grid.append(data);
    getGrid();
  });
}

$(document).ready(function () {
  getGrid();
})
