<!DOCTYPE html>
<html>
<head>
	<title>Index</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="index.css">

</head>
<body>

	<p><a href="http://api.jquery.com/jquery.getjson/" target="_blank">Base</a></p>
	<p><a href="https://stackoverflow.com/questions/14060271/jquery-getjson-and-each-looping-through-child-array-not-linked-to-parent-index?rq=1" target="_blank">Looping nests</a></p>

<!-- INDEX -->
<hr>
<h1>Table</h1>
<form enctype=”multipart/form-data” method="POST" action="save-json.php" id="saveForm">
	<!-- Numero de colunas: <label id="totalColumns"></label> -->
	<p><span>Numero de colunas: </span><span id="totalColumns"></span><span id="lastIdSpan">(LastId:<span id="lastId"></span>)</span></p>
	<span>Nome da tabela: </span><input type="text" id="tableName" name="tableName" />
	<span>Singular: </span><input type="text" id="tableSingular" name="tableSingular" />
	<span>Plural: </span><input type="text" id="tablePlural" name="tablePlural" />
	<button type="button" id="addNewCOlumn">Adicionar coluna</button>

	<hr>
	<div id="fields"></div>

	<input type="text" id="jsonOutPut" name="jsonOutPut"><br>
	<!-- <textarea  id="jsonOutPut" name="jsonOutPut"></textarea><br> -->





</form>
	<button id="updateJsonTable">Salvar tabela</button>


	<!-- <button id="updateJson">Atualizar	</button> -->




<div id="newJson"></div>

<br>

<!-- ROUTES -->
<hr>
<h1>Routes</h1>
<p><button id="generateRoutes" type="button">Gerar rotas</button></p>
<textarea id="routes_string_output"></textarea>

<!-- CONTROLLER -->
<hr>
<h1>Controller</h1>
<p><button id="generateController" type="button">Gerar controlador</button></p>
<textarea id="controller_string_output"></textarea>

<!-- MODEL -->
<hr>
<h1>Model</h1>
<p><button id="generateModel" type="button">Gerar model</button></p>
<textarea id="model_string_output"></textarea>

<!-- MODEL -->
<hr>
<h1>Request</h1>
<p><button id="generateRequest" type="button">Gerar request</button></p>
<textarea id="request_string_output"></textarea>











</body>
<script src="index.js"></script>


</html>



