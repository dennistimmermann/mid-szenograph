<!DOCTYPE html>
<html lang ="de">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>S Z E N O G R A P H</title>
		<link href='https://fonts.googleapis.com/css?family=Hind:300,600,700' rel='stylesheet' type='text/css' />
		<link href="css/main.css" rel="stylesheet" type="text/css" />
		<link href="css/lexikon.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript">
			var inputList = {{{inputlist}}}
			var outputList = {{{outputlist}}}
		</script>
	</head>

	<body>
		{{> header }}
		<main class="container">
			<h1 class="inline-block">Lexikon</h1>
			<div class="search">
				<input class="search-input" type="search" id="search" placeholder="Suchen..." />
				<button class="search-submit"><img class="search-icon" src="img/search.svg"></button>
			</div>
			</div class="configurator">
				<div class="grid_main">
					<ul id="inputList-container">	
					</ul>
				</div>
			<div>
		</main>

		{{> footer }}

		<script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>
		<script src="js/lexikon.js"></script>
	</body>
</html>
