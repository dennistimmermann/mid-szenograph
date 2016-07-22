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

	var tags = [];

	$('.example-search-input').keypress(function(e) {
		if(e.which == 13) {
			if($(this).val() == '' || $.inArray($(this).val(), tags) != -1) {
				$(this).val('');
			} else {
				var tag = $(this).val();
				tags.push($(this).val());
				$(this).val('');
				$('.search-tags').append("<div class='tag'>" + tag + "<button class='delete-button' type='button'><img src='http://placehold.it/10x10'></button></div>");
			}
		}

		$('.delete-button').click(function(){
			var index = $.inArray($(this).parent('div').text(), tags);
			tags.splice(index);
			$(this).parent('div').remove();
    	});

	});

});
