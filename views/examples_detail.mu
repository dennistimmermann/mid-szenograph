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
			<span class="back"><a href="#" onClick="history.go(-1)">zurück</a></span><h1>Beispiele</h1>
			{{debug}}
			<div class="project">
				<h2>{{data.name}}</h2>
				<img width="600px" src="/{{data.preview_image}}">
				{{#data.video}}
				<div class="video">
				    <img src="/img/video_icon.png">
				    <a href="{{data.video}}">{{data.video}}</a>
				</div>
				{{/data.video}}
				{{^data.video}}
				{{/data.video}}
				<p>
					<b>Szenografisches Elemente:</b> <i class="get-input"></i><br>
					<b>Szenographische Realisationskomponente:</b> <i class="get-output"></i>
				</p>
				<p>
					{{data.description}}
				</p>
				<div class="box-off input">
					{{#inputlist}}
						<input type="checkbox" name="inputs[]" value="{{id}}" {{#checked}}checked{{/checked}}><b>{{name}}</b>
					{{/inputlist}}
				</div>
				<div class="box-off output">
					{{#outputlist}}
						<input type="checkbox" name="inputs[]" value="{{id}}" {{#checked}}checked{{/checked}}><b>{{name}}</b>
					{{/outputlist}}
				</div>

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
		<script>
			jQuery(document).ready(function ($) {
				var inputs = [];
				var outputs = [];
				$('.input input:checked').each(function() {
				    inputs.push($(this).next().text());
				});
				$('.output input:checked').each(function() {
				    outputs.push($(this).next().text());
				});
				$('.get-input').html(inputs);
				$('.get-output').html(outputs);
			});
		</script>
	</body>
</html>