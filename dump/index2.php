<!DOCTYPE html>
<html>
<head>
	<title>Index2</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<link rel="stylesheet" type="text/css" href="index.css">

</head>
<body>

	<p><a href="http://api.jquery.com/jquery.getjson/" target="_blank">Base</a></p>
	<p><a href="https://stackoverflow.com/questions/14060271/jquery-getjson-and-each-looping-through-child-array-not-linked-to-parent-index?rq=1" target="_blank">Looping nests</a></p>


<form enctype=”multipart/form-data” method="POST" action="save-json.php">
	Numero de colunas: <label id="totalColumns"></label>
	<div id="fields"></div>

<input type="text" id="jsonOutPut" name="jsonOutPut"><br>



<button id="updateJsonTable">Atualizar Tabela</button>


</form>



<div id="newJson"></div>

<br>




</body>
<script src="index2.js"></script>


</html>
