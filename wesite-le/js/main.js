jQuery(document).ready(function ($) {

	$('.dropdown').click(function() {
		$('.dropdown-content').slideToggle(300).css('borderTop', 'none');
	    $('.dropdown-content li').click(function() {
	        $('.hidden').val($(this).text());
	        $('.default').text($(this).text());
	        $('.dropdown-content').slideUp(300);
	    });
	});

	var $grid = $('#example-grid');

	$grid.masonry({
		itemSelector: '.example-grid-item',
		percentPosition: true,
		gutter: 10,
		columnWidth: '.example-grid-sizer'
	});

	$grid.imagesLoaded().progress( function() {
		$grid.masonry();
	});

	$('.example-img').click(function() {
		console.log(this)
		$(this).next().slideToggle( '300', function() {
			$grid.masonry('layout');
	  	});
	});

	var Shuffle = window.shuffle;

	$grid.shuffle({
		itemSelector: '.example-grid-item'
	});

	$('.example-search-input').bind('keyup', function (evt) {
		var searchText = evt.target.value.toLowerCase();

		$.each( $('.example-grid-item'), function(index, child) {
			var titleText = $(this).data('title').toLowerCase().trim();
			if(titleText.indexOf(searchText) !== -1) {
				$(this).show();
				$grid.masonry('layout');
			} else {
				$(this).hide();
				$grid.masonry('layout');
			}
		});
	})

});
