function search()
{
	$('.search-input').bind('keyup', function (evt) 
	{
		console.log("Typing");
		/*var searchText = evt.target.value.toLowerCase();
		$.each( $('.example-grid-item'), function(index, child) {
			var titleText = $(this).data('title').toLowerCase().trim();
			if(titleText.indexOf(searchText) !== -1) {
				$(this).show();
				$grid.masonry('layout');
			} else {
				$(this).hide();
				$grid.masonry('layout');
			}
		});*/
	})
}