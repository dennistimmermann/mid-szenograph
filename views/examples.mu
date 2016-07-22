<!DOCTYPE html>
<html lang ="de">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>S Z E N O G R A P H</title>
		<link href='https://fonts.googleapis.com/css?family=Hind:300,600,700' rel='stylesheet' type='text/css' />
		<link href="css/main.css" rel="stylesheet" type="text/css" />
	</head>

	<body>
		{{> header }}

		<main class="container">
			<h1>Beispiele</h1>
			<div class="example-search">
				<input class="example-search-input js-shuffle-search" type="search" id="search" placeholder="Suchen..." />
				<button class="example-search-submit"><img class="search-icon" src="img/search.svg"></button>
			</div>

			<div class="search-tags">

			</div>

			<div class="example">

				<div id="example-grid">
  					<div class="example-grid-sizer"></div>
					<!--  template item -->

					{{#list}}
					<div class="example-grid-item" data-title="Rot" data-groups='["all", "red"]'>
						<a class="example-more" href="/examples/{{id}}">
    						<span class="example-text">
    							<h2>{{name}}</h2>
    							<hr/>
    							<p>{{hashtags}}</p>
    						</span>
    						<img class="example-img" src="{{preview_img}}" />
    					</a>
  					</div>

					{{/list}}

					<!--  !template item -->
  					<!-- <div class="example-grid-item" data-title="Rot" data-groups='["all", "red"]'>
    					<a class="example-more" href="beispiele_info.html">
    						<span class="example-text">
    							<h2>Lorem Ipsum</h2>
    							<hr/>
    							<p>#Bacon #T-Bone #Steak</p>
    						</span>
    						<img class="example-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" />
    					</a>
  					</div> -->
  					<!-- <div class="example-grid-item" data-title="Schnitzel" data-groups='["all", "numbers", "blue", "square"]'>
  						<a class="example-more" href="beispiele_info.html">
    						<span class="example-text">
    							<h2>Lorem Ipsum</h2>
    							<hr/>
    							<p>#Bacon #T-Bone #Steak</p>
    						</span>
    						<img class="example-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg" />
    					</a>
  					</div>
					<div class="example-grid-item" data-title="Maskenball" data-groups='["all", "green", "blue", "square"]' >
						<a class="example-more" href="beispiele_info.html">
    						<span class="example-text">
    							<h2>Lorem Ipsum</h2>
    							<hr/>
    							<p>#Bacon #T-Bone #Steak</p>
    						</span>
    						<img class="example-img" src="img/example_placeholder.png" />
    					</a>
					</div>
					<div class="example-grid-item" data-title="Flugzeug" data-groups='["all", "numbers", "blue", "square"]'>
						<a class="example-more" href="beispiele_info.html">
    						<span class="example-text">
    							<h2>Lorem Ipsum</h2>
    							<hr/>
    							<p>#Bacon #T-Bone #Steak</p>
    						</span>
    						<img class="example-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" />
    					</a>
					</div>
					<div class="example-grid-item" data-title="Blase" data-groups='["all", "numbers", "blue", "square"]'>
						<a class="example-more" href="beispiele_info.html">
    						<span class="example-text">
    							<h2>Lorem Ipsum</h2>
    							<hr/>
    							<p>#Bacon #T-Bone #Steak</p>
    						</span>
    						<img class="example-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" />
    					</a>
					</div>
					<div class="example-grid-item" data-title="Ball" data-groups='["all", "numbers", "blue", "square"]'>
						<a class="example-more" href="beispiele_info.html">
    						<span class="example-text">
    							<h2>Lorem Ipsum</h2>
    							<hr/>
    							<p>#Bacon #T-Bone #Steak</p>
    						</span>
    						<img class="example-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" />
    					</a>
					</div>
					<div class="example-grid-item" data-title="Maske">
						<a class="example-more" href="beispiele_info.html">
    						<span class="example-text">
    							<h2>Lorem Ipsum</h2>
    							<hr/>
    							<p>#Bacon #T-Bone #Steak</p>
    						</span>
    						<img class="example-img" src="img/example_placeholder.png" />
    					</a>
					</div>
					<div class="example-grid-item" data-title="Sport">
						<a class="example-more" href="beispiele_info.html">
    						<span class="example-text">
    							<h2>Lorem Ipsum</h2>
    							<hr/>
    							<p>#Bacon #T-Bone #Steak</p>
    						</span>
    						<img class="example-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg" />
    					</a>
					</div>
					<div class="example-grid-item" data-title="Handschuh">
						<a class="example-more" href="beispiele_info.html">
    						<span class="example-text">
    							<h2>Lorem Ipsum</h2>
    							<hr/>
    							<p>#Bacon #T-Bone #Steak</p>
    						</span>
    						<img class="example-img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/flight-formation.jpg" />
    					</a>
					</div> -->
				</div>

			</div>
		</main>

		<footer class="container">
			Impressum
		</footer>

		<script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>
		<script type="text/javascript" src="js/imagesloaded.pkgd.min.js"></script>
		<script type="text/javascript" src="js/masonry.pkgd.min.js"></script>
		<script type="text/javascript" src="js/shuffle.js"></script>
		<script type="text/javascript" src="js/main.js"></script>
	</body>
</html>
