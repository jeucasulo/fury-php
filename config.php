<!DOCTYPE html>
<html>
<head>
	<title>Index</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="index.css">

</head>
<body>
<h1>Inserir menu de cores</h1>
<h1 title="fodaci">Configuração</h1>
<hr>
<h1>Paths</h1>
<p>Routes: 
	<input type="text" id="routesPath" name="routesPath" />
</p>

<p>Controller: 
	<input type="text" id="controllerPath" name="controllerPath" />
</p>
<p>Model: 
	<input type="text" id="modelPath" name="modelPath" />
</p>
<p>Request: 
	<input type="text" id="requestPath" name="requestPath" />
</p>
<p>Views: 
	<input type="text" id="viewsPath" name="viewsPath" />
</p>
<hr>
<h1>Views</h1>
<h3>Nav</h3>
<div>		
	<textarea id="navOutput" name="navOutput"></textarea>
</div>

<h3>Footer</h3>
<div>
	<textarea id="footerOutput" name="footerOutput"></textarea>
</div>

<hr>
<h1>Import</h1>
<p>Bootstrap local <input type="checkbox" name=""></p> 
<p>Bootstrap cdn <input type="checkbox" name=""></p> 
<p>Jquery local <input type="checkbox" name=""></p> 
<p>Jquery cdn <input type="checkbox" name=""></p> 
<p>Bootstrap templates <input type="checkbox" name=""></p> 

<form enctype=”multipart/form-data” method="POST" action="save-json.php" id="saveForm">
	<input id="jsonConfigOutput" name="jsonConfigOutput" type="text"></input>
</form>

<button type="button" id="updateConfig">Atualizar configuração</button>


</body>
<script src="config.js"></script>
	<script type="text/javascript">
	</script>

</html>



