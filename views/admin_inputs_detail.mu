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
			<h1>Add Inputs</h1>
			{{debug}}
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
						<td><b>Type</b></td>
						<td><select name="type">
						    <option value="none" {{#data.selected.none}}selected{{/data.selected.none}}>none</option>
						    <option value="input" {{#data.selected.input}}selected{{/data.selected.input}}>input</option>
						    <option value="attribute" {{#data.selected.attribute}}selected{{/data.selected.attribute}}>attribute</option>
						    <option value="sensor" {{#data.selected.sensor}}selected{{/data.selected.sensor}}>sensor</option>
						</select></td>
					</tr>
					<tr>
						<td style="vertical-align:top"><b>Description</b></td>
						<td><textarea name="description">{{data.description}}</textarea></td>
					</tr>
					<tr>
						<td style="vertical-align:top"><b>Content</b></td>
						<td><textarea name="content">{{data.content}}</textarea></td>
					</tr>
					<tr>
						<td><b>Tags</b></td>
						<td><input type="text" name="tags" value="{{#data.tags}}{{.}},{{/data.tags}}"></td>
					</tr>
					<tr>
						<td><b>Examples</b></td>
						<td><input type="text" name="examples" value="{{#data.examples}}{{.}},{{/data.examples}}"></td>
					</tr>
					<tr>
						<td style="vertical-align:top"><b>Children</b></td>
						<td>
							<div class="box">
								{{#data.list}}
									<input type="checkbox" name="items[]" value="{{id}}" {{#checked}}checked{{/checked}}>{{type}} - {{name}} - {{id}}<br>
								{{/data.list}}
							</div>
						</td>
					</tr>
				</table>
				<a class="add-examples" href="/admin/inputs">Back</a>
				<button class="save-add-examples" type="submit" value="save">Save</button>
			</form>
		</div>
	</body>
</html>
