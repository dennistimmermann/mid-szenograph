<!DOCTYPE html>
<html lang ="de">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>S Z E N O G R A P H</title>
		<link href='https://fonts.googleapis.com/css?family=Hind:300,600,700' rel='stylesheet' type='text/css' />
		<link href="css/main.css" rel="stylesheet" type="text/css" />
		<link href="css/configurator.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript">
			var inputList = {{{inputlist}}}
			var outputList = {{{outputlist}}}
			var exampleList = {{{examplelist}}}
		</script>
	</head>

	<body>
		{{> header }}
		<main class="container">
			<h1 class="inline-block">Konfigurator</h1><div class="info inline-block">i</div>
			<div class="search">
				<input class="search-input" type="search" id="search" placeholder="Suchen..." />
				<button class="search-submit"><img class="search-icon" src="img/search.svg"></button>
			</div>
			</div class="configurator">
				<div class="grid_main">
					<h2>Szenografisches Element</h2>
					<ul id="inputList-container">	
					</ul>
				</div>

				<div class="splitter">
					
				</div>
				
				<div class="grid_main">
					<h2>Szenografische Realisation</h2>
					<ul id="outputList-container">
	    			</ul>
				</div>

				<div class="splitter">

				</div>

				<div class="grid_main">
					<h2 style="margin-bottom: 21px">Beispiele</h2>
					<!--<div class="seletion_input"></div>
					<div class="seletion_output"></div>-->
					<div id="exampleList-container" >	
	    			</div>
				</div>
			<div>
			<div class="pdf-sheet">
				<h1 class="inline-block">Ihr Projekt</h1>
				<p>
					Szenografisches Element:<i class="get-input"></i><br>
					Szenografische Realisation:<i class="get-output"></i><br><br>
					<a class="example-link" href="/datasheet">&#8594 PDF erstellen</a>
				</p>
			</div>
		</main>

		{{> footer }}

		<script type="text/javascript" src="js/jquery-3.0.0.min.js"></script>
		<script src="js/configurator.js"></script>
	</body>
</html>
