<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Admin/examples</title>
		<link href='https://fonts.googleapis.com/css?family=Hind:300,600,700' rel='stylesheet' type='text/css' />
		<link href="/css/main.css" rel="stylesheet" type="text/css" />
	</head>

	<body>
		<div class="container admin-examples">
			<h1>Beispiele</h1>
			<table>
				<tr>
					<td>
						<b>Name</b>
					</td>
					<td>
						<b>ID</b>
					</td>
					<td>
						<b>Löschen</b>
					</td>
				</tr>
				{{#list}}
					<tr>
						<td>
							<a href="/admin/examples/{{id}}">{{name}}</a>
						</td>
						<td>
							{{id}}
						</td>
						<td align="center">
							<a href="/admin/examples/{{id}}/delete"><img src="/img/close.png"></a>
						</td>
					</tr>
				{{/list}}
			</table>
			<br><br>
			<a class="add-examples" href="/admin">Zurück</a>
			<a class="add-examples" href="/admin/examples/add">Neues Beispiel hinzufügen</a>
		</div>
		<div class="admin-logo"><img src="/img/admin-logo.png"></div>
	</body>
</html>
