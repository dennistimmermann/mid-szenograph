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

	var tags = [];

	$('.example-search-input').keypress(function(e) {
		if(e.which == 13) {
			if($(this).val() == '' || $.inArray($(this).val(), tags) != -1) {
				$(this).val('');
			} else {
				var tag = $(this).val();
				tags.push($(this).val().toLowerCase());
				$(this).val('');
				var img = $("<img/>",{
							src : "img/close.png"
							});
				var button =	$("<button/>",{
									class : "delete-button"
								});

				button.on("click", function(){
					var tag = $(this).parent('div').text().toLowerCase().trim();
					var isInTag = tags[tag];
					if(isInTag!=='undefined') {
						$(this).parent().remove();
						var index = tags.indexOf(tag);
						tags.splice(index,1);
						$.each( $('.example-grid-item'), function(index, child) {
							var obj = $(this);
							var titleTags = $(this).data('groups').toString().toLowerCase().split(',');
							var hasTag = 0;
							for(var tag in tags){
								if($.inArray(tags[tag],titleTags) !== -1){
									hasTag++;
								}
							}
							if(hasTag == tags.length){
								obj.show();
								$grid.masonry('layout');
							}
						});
					}
					
				});

				var div = $("<div/>",{
								class: 'tag',
								text: tag
							});
				
				img.appendTo(button);
				button.appendTo(div);
			
				$('.search-tags').append(div);

				$.each( $('.example-grid-item'), function(index, child) {
					var titleTags = $(this).data('groups').toString().toLowerCase().split(',');
					var obj = $(this);
					$.each(tags, function(i,e) {
					    if ($.inArray(e, titleTags) == -1) {
					    	$(obj).hide();
					    	$grid.masonry('layout');
					    }
					});
				});
			}
		}
		
	});

});
