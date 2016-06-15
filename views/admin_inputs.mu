<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Admin/inputs</title>
	</head>
	<body>
		<table>
			{{#list}}
				<tr>
					<td>
						<a href="/admin/inputs/{{id}}">> {{name}}</a>
					</td>
					<td>
						{{type}}
					</td>
					<td>
						{{id}}
					</td>
					<td>
						<a href="/admin/inputs/{{id}}/delete">[X]</a>
					</td>
				</tr>
			{{/list}}
		</table>
		<br><br><a href="/admin/inputs/add">add new</a>
	</body>
</html>
