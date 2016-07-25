<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Admin/examples/detail</title>
		<link href='https://fonts.googleapis.com/css?family=Hind:300,600,700' rel='stylesheet' type='text/css' />
		<link href="/css/main.css" rel="stylesheet" type="text/css" />
	</head>

	<body>
		<div class="container admin-examples-details">
			<h1>Beispiel hinzufügen</h1>
			<font color="#dd5565">{{debug}}</font>
			<form class="" action="/admin/examples/{{data.id}}" method="post">
				<table>
					<tr>
						<td><b>ID</b></td>
						<td>{{data.id}}</td>
					</tr>
					<tr>
						<td><b>Name</b></td>
						<td><input type="text" name="name" value="{{data.name}}"></td>
					</tr>
					<tr>
						<td><b>Vorschaubild</b></td>
						<td><input type="text" name="preview_image" value="{{data.preview_image}}"></td>
						<td><i>Pfad eingeben (Ordner/Datei.Endung)</i></td>
					</tr>
					<tr>
						<td><b>Video</b></td>
						<td><input type="text" name="video" value="{{data.video}}"></td>
						<td><i>Pfad eingeben (http://video.me)</i></td>
					</tr>
					<tr>
						<td style="vertical-align:top"><b>Beschreibung</b></td>
						<td><textarea name="description">{{data.description}}</textarea></td>
					</tr>
					<tr>
						<td><b>Tags</b></td>
						<td><input type="text" name="tags" value="{{#data.tags}}{{.}},{{/data.tags}}"></td>
						<td><i>Rot,Grün,Blau,Gelb</i></td>
					</tr>
					<tr>
						<td style="vertical-align:top"><b>Szenografisches </br>Element</b></td>
						<td>
							<div class="box">
								{{#data.list}}
									<input type="checkbox" name="inputs[]" value="{{id}}" {{#checked}}checked{{/checked}}>{{name}} - {{id}}<br>
								{{/data.list}}
							</div>
						</td>
					</tr>
					<tr>
						<td><b>Szenografische </br>Realisation</b></td>
						<td>
							<div class="box">
								{{#data.inputlist}}
									<input type="checkbox" name="inputs" value="{{id}}" {{#checked}}checked{{/checked}}>{{name}} - {{id}}<br>
								{{/data.inputlist}}
							</div>
						</td>
					</tr>
				</table>
				<a class="add-examples" href="/admin/examples">Zurück</a>
				<button class="save-add-examples" type="submit" value="save">Speichern</button>
			</form>
			<div class="admin-logo"><img src="/img/admin-logo.png"></div>
		</div>
	</body>
</html>
