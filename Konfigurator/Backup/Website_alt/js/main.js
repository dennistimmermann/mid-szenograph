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

	$grid.shuffle({
		itemSelector: '.example-grid-item'
	});

	$('#filter a').click(function (e) {
		e.preventDefault();
		 
		$('#filter a').removeClass('active');
		$(this).addClass('active');
		 
		var groupName = $(this).attr('data-group');
		 
		$grid.shuffle('shuffle', groupName );
		$grid.masonry('layout');
	});



	// Demo.prototype.addSearchFilter = function () {
	$('.example-search-input').bind('keyup', function (evt) {
		console.log(evt)
		var searchText = evt.target.value.toLowerCase();
		console.log(penis)

		penis.filter(function(element, shuffle) {
			console.log(element)
			return false
		})
	})

});
