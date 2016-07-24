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
					<div class="example-grid-item" data-title="Rot" data-groups="{{tags}}">
						<a class="example-more" href="/examples/{{id}}">
    						<span class="example-text">
    							<h2>{{name}}</h2>
    							<hr/>
    							<p>{{#tags}}#{{.}} {{/tags}}</p>
    						</span>
    						<img class="example-img" src="{{preview_image}}" />
    					</a>
  					</div>
					{{/list}}
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
