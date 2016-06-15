<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Admin/inputs/detail</title>
	</head>
	<body>
		{{debug}}
		<form class="" action="/admin/inputs/{{data.id}}" method="post">
			<table>
				<tr>
					<td>id</td>
					<td>{{data.id}}</td>
				</tr>
				<tr>
					<td>name</td>
					<td><input type="text" name="name" value="{{data.name}}"></td>
				</tr>
				<tr>
					<td>type</td>
					<td><select name="type">
					    <option value="none" {{#data.selected.none}}selected{{/data.selected.none}}>none</option>
					    <option value="input" {{#data.selected.input}}selected{{/data.selected.input}}>input</option>
					    <option value="attribute" {{#data.selected.attribute}}selected{{/data.selected.attribute}}>attribute</option>
					    <option value="sensor" {{#data.selected.sensor}}selected{{/data.selected.sensor}}>sensor</option>
					</select></td>
				</tr>
				<tr>
					<td>description</td>
					<td><textarea name="description">{{data.description}}</textarea></td>
				</tr>
				<tr>
					<td>content</td>
					<td><textarea name="content">{{data.content}}</textarea></td>
				</tr>
				<tr>
					<td>tags</td>
					<td><input type="text" name="tags" value="{{#data.tags}}{{.}},{{/data.tags}}"></td>
				</tr>
				<tr>
					<td>examples</td>
					<td><input type="text" name="examples" value="{{#data.examples}}{{.}},{{/data.examples}}"></td>
				</tr>
				<tr>
					<td>children</td>
					<td>
						{{#data.list}}
							<input type="checkbox" name="items[]" value="{{id}}" {{#checked}}checked{{/checked}}>{{type}} - {{name}} - {{id}}<br>
						{{/data.list}}
					</td>
				</tr>
			</table>
			<input type="submit" value="save">
		</form>
	</body>
</html>
