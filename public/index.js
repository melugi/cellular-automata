$.get('/grid', function (data) {
  let $grid = $('#grid');
  $grid.empty();
  $grid.append(data);
});

