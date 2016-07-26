<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">

	<title>S Z E N O G R A P H</title>

	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

	<meta name="author" content="">

	<link href="css/einleitung.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Work+Sans:200,300,500,700" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">
	<link href="css/demo.css" rel="stylesheet">
	<script src="js/ScrollTrigger.min.js"></script>

</head>

<body>
	<div class="einleitung">
		<div class="block">
			<div class="box_start">
				<img id="logo" src="start/logo3.png"></img>
				<svg viewBox="0 0 60 60">
					<path d="M52.254 18.327c0.816-0.804 2.127-0.804 2.937 0s0.813 2.103 0 2.907l-23.724 23.49c-0.81 0.804-2.121 0.804-2.937 0l-23.724-23.49c-0.81-0.804-0.81-2.103 0-2.907 0.813-0.804 2.127-0.804 2.937 0l22.257 21.423 22.254-21.423z"></path>
				</svg>
			</div>
		</div>

		<div class="block2">
			<img src="start/buhneoben.png">

			<div class="block2overlay">
				<h1 class="text1" data-scroll="toggle(.fromTopIn, .fromTopOut) addHeight"></h1>
				<h2 style="color:white" class="text2" data-scroll="toggle(.fromBottomIn, .fromBottomOut) addHeight">
			DER SZENOGRAF IST EIN TOOL ZUR ERSTELLUNG EINES INTERAKTIVEN BÜHNENBILDES</h2>
			</div>
			<img src="start/buhneunten.png">
		</div>

		<div class="block3 ">
			<h2 style="color:white" class="text2" data-scroll="toggle(.fromBottomIn, .fromBottomOut) addHeight">WÄHLE EINEN BEGRIFF AUS DEM KONFIGURATOR AUS MIT DEM GEARBEITET WERDEN SOLL</h2>

		</div>

		<div class="block4 ">
			<h2 class="text2" data-scroll="toggle(.fromBottomIn, .fromBottomOut) addHeight">Hier erscheint das Video</h2>

			<h1 data-scroll="toggle(.scaleDownIn, .scaleDownOut) addHeight"></h1>
			<h2 class="text2" data-scroll="toggle(.fromBottomIn, .fromBottomOut) addHeight"></h2>
		</div>

		<div class="block5 ">
			<div class="textblock1">
				<div class="links ">
					<h2 class="text2" data-scroll="toggle(.fromBottomIn, .fromBottomOut) addHeight">SZENOGRAFISCHE ELEMENTE</h2>
					<h4 class="text4" data-scroll="toggle(.scaleDownIn, .scaleDownOut) addHeight">messbare Elemente</h4></div>
				<div class="rechts ">

					<div data-scroll="toggle(.fromRightIn, .fromRightOut) addHeight">
						<img class="auge" src="start/auge.png" />
					</div>
					<div data-scroll="toggle(.fromRightIn, .fromRightOut) addHeight">
						<img class="herz" src="start/herz.png" />
					</div>
					<div data-scroll="toggle(.fromRightIn, .fromRightOut) addHeight">
						<img class="hand" src="start/hand.png" />
					</div>
					<div data-scroll="toggle(.fromRightIn, .fromRightOut) addHeight">
						<img class="handy" src="start/handy.png" />
					</div>
					<div data-scroll="toggle(.fromRightIn, .fromRightOut) addHeight">
						<img class="media" src="start/media.png" />
					</div>
					<div data-scroll="toggle(.fromRightIn, .fromRightOut) addHeight">
						<img class="face" src="start/face.png" />
					</div>

				</div>
			</div>
		</div>

		<div class="block6 ">
			<div class="textblock1">
				<div class="links ">
					<div data-scroll="toggle(.fromLeftIn, .fromLeftOut) addHeight">
						<img class="video" src="start/video.png" />
					</div>
					<div data-scroll="toggle(.fromLeftIn, .fromLeftOut) addHeight">
						<img class="licht" src="start/licht.png" />
					</div>
					<div data-scroll="toggle(.fromLeftIn, .fromLeftOut) addHeight">
						<img class="sound" src="start/sound.png" />
					</div>
					<div data-scroll="toggle(.fromLeftIn, .fromLeftOut) addHeight">
						<img class="messen" src="start/messen.png" />
					</div>
				</div>
				<div class="rechts">
					<h2 class="text2" data-scroll="toggle(.fromBottomIn, .fromBottomOut) addHeight">SZENOGRAFISCHE REALISATION</h2>
					<h4 class="text4" data-scroll="toggle(.scaleDownIn, .scaleDownOut) addHeight">physische mögliche Realisationen elemente</h4>
				</div>
			</div>
		</div>
		<div>
			<a href="/configurator"><img src="start/start_konfigurator.png"></a>
		</div>

	</div>

	<script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>
	<script>
		$(document).ready(function() {
			var counter = 90;
			var factor = counter;
			var scale = 1.5;
			$(window).bind('mousewheel DOMMouseScroll', function(event) {

				if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
					// scroll up

					if ((counter + 1) <= 100) counter++;

				} else {
					// scroll down


					if (counter > 0) counter--;


				}
				if ((1.5 * (counter / factor) > 0.3) && (counter / factor) < 1) {
					scale = 1.5 * (counter / factor);
					$('#logo').css("transform", 'translateX(-50%) translateY(-50%) scale(' + scale + ')');

				}

				if (scale <= 0.31) {
					$('body').css("overflow", "visible");
					$('#logo').css("position", "absolute");
				} else {
					if ($(window).scrollTop() < 10) {
						$('body').css("overflow", "hidden");

					}

				}


			});
			// $(window).on("resize",function(){
			// 	var imgHoehe = $(".block2 > img:first-child").height();
			// 		$(".block2 > img:first-child").css("top",(imgHoehe/-2));
			// 	$(".block2 > img:last-child").css("bottom",(imgHoehe/-2));
			// }).trigger('resize');
		});
	</script>

	<script>
		window.counter = function() {
			// this refers to the html element with the data-scroll-showCallback tag
			var span = this.querySelector('span');
			var current = parseInt(span.textContent);

			span.textContent = current + 1;
		};

		document.addEventListener('DOMContentLoaded', function() {
			ScrollTrigger.init();
		});
	</script>

</body>

</html>
