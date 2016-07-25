<!DOCTYPE html>
<html lang ="de">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>S Z E N O G R A P H</title>
		<link href='https://fonts.googleapis.com/css?family=Hind:300,600,700' rel='stylesheet' type='text/css' />
		<link href="/css/main.css" rel="stylesheet" />
	</head>

	<body>
		{{> header }}
		<main class="container">
			<span class="back"><a href="/examples">zurück</a></span><h1>Beispiele</h1>
			{{debug}}
			<div class="project">
				<h2>{{data.name}}</h2>
				<img width="600px" src="/{{data.preview_image}}">
				{{#data.video}}
				<div class="video">
				    <img src="/img/video.png">
				    <a href="{{data.video}}">{{data.video}}</a>
				</div>
				{{/data.video}}
				{{^data.video}}
				{{/data.video}}
				<p>
					<b>Szenografisches Elemente:</b> Geschwindigkeit der Gestik<br/>
					<b>Szenographische Realisationskomponente:</b> Lautstärke
				</p>
				<p>
					{{data.description}}
				</p>
			</div>
			<!--<div class="more">
				{{#list}}
				<h2>Ähnliche Stücke</h2>
				<a href="#"><img src="{{preview_image}}"></a>
				{{/list}}
			</div>-->
		</main>

		{{> footer }}

		<script src="/js/jquery-2.2.3.min.js"></script>
	</body>
</html>