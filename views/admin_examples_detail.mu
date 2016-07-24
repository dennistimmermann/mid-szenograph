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
			<h1>Add Examples</h1>
			{{debug}}
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
						<td><b>Preview Image</b></td>
						<td><input type="text" name="preview_image" value="{{data.img}}"></td>
					</tr>
					<tr>
						<td style="vertical-align:top"><b>Description</b></td>
						<td><textarea name="description">{{data.description}}</textarea></td>
					</tr>
					<tr>
						<td><b>Tags</b></td>
						<td><input type="text" name="tags" value="{{#data.tags}}{{.}},{{/data.tags}}"></td>
					</tr>
					<tr>
						<td style="vertical-align:top"><b>Inputs</b></td>
						<td>
							<div class="box">
								{{#data.list}}
									<input type="checkbox" name="inputs[]" value="{{id}}" {{#checked}}checked{{/checked}}>{{name}} - {{id}}<br>
								{{/data.list}}
							</div>
						</td>
					</tr>
					<tr>
						<td><b>Outputs</b></td>
						<td></td>
					</tr>
				</table>
				<a class="add-examples" href="/admin/examples">Back</a>
				<button class="save-add-examples" type="submit" value="save">Save</button>
			</form>
		</div>
	</body>
</html>
