<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Admin/inputs/detail</title>
		<link href='https://fonts.googleapis.com/css?family=Hind:300,600,700' rel='stylesheet' type='text/css' />
		<link href="/css/main.css" rel="stylesheet" type="text/css" />
	</head>

	<body>
		<div class="container admin-examples-details">
			<h1>Szenografisches Element hinzufügen</h1>
			<font color="#dd5565">{{debug}}</font>
			<form class="" action="/admin/inputs/{{data.id}}" method="post">
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
						<td><b>Icon</b></td>
						<td><input type="text" name="iconpath" value="{{data.iconpath}}"></td>
						<td>Icon als Pfad (Ordner/Bezeichnung.Endung)</td>
					</tr>
					<tr>
						<td><b>Typ</b></td>
						<td><select name="type">
						    <option value="kein" {{#data.selected.none}}selected{{/data.selected.none}}>kein</option>
						    <option value="Szenografisches Element" {{#data.selected.input}}selected{{/data.selected.input}}>Szenografisches Element</option>
						    <option value="Attribut" {{#data.selected.attribute}}selected{{/data.selected.attribute}}>Attribut</option>
						    <option value="Sensor" {{#data.selected.sensor}}selected{{/data.selected.sensor}}>Sensor</option>
						</select></td>
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
						<td><b>Ausprägungen</b></td>
						<td><input type="text" name="examples" value="{{#data.examples}}{{.}},{{/data.examples}}"></td>
					</tr>
					<tr>
						<td style="vertical-align:top"><b>Untergeordnete <br>Elemente</b></td>
						<td>
							<div class="box">
								{{#data.list}}
									<input type="checkbox" name="items[]" value="{{id}}" {{#checked}}checked{{/checked}}><b>{{name}}</b> - Typ: {{type}}<br>
								{{/data.list}}
							</div>
						</td>
					</tr>
				</table>
				<a class="add-examples" href="/admin/inputs">Zurück</a>
				<button class="save-add-examples" type="submit" value="save">Speichern</button>
			</form>
			<div class="admin-logo"><img src="/img/admin-logo.png"></div>
		</div>
	</body>
</html>
