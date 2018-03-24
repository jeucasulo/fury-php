<!DOCTYPE html>
<html>
<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<title>Index</title>
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<!-- Bootstrap Bootswatch Theme-->
	<link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" crossorigin="anonymous">

	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>

<section id="myNavBar">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand" href="#">Fury</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      
	    </ul>
	    <form class="form-inline my-2 my-lg-0">
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Configurações<span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Instruções<span class="sr-only">(current)</span></a>
	      </li>
	      <li class="nav-item active">
	        <a class="nav-link" href="#">Tabelas<span class="sr-only">(current)</span></a>
	      </li>
	    </form>
	  </div>
	</nav>
</section>
	
<section id="tableSection">
	<div class="container">
		<div class="row">
			<div class="col-sm">
				<div id="tutorialJson">
					<p><a href="http://api.jquery.com/jquery.getjson/" target="_blank">Base</a></p>
					<p><a href="https://stackoverflow.com/questions/14060271/jquery-getjson-and-each-looping-through-child-array-not-linked-to-parent-index?rq=1" target="_blank">Looping nests</a></p>
				</div>

					<!-- INDEX -->
					
					<!-- <h1>Table</h1> -->
					<form enctype=”multipart/form-data” method="POST" action="save-json.php" id="saveForm">
						<div class="form-group">

						<!-- Numero de colunas: <label id="totalColumns"></label> -->
						<p><span id="lastIdSpan">(LastId:<span id="lastId"></span>)</span></p>
						<span>Nome da tabela: </span><input type="text" id="tableName" name="tableName" class='form-control-sm' />&nbsp&nbsp&nbsp&nbsp
						<span>Singular: </span><input type="text" id="tableSingular" name="tableSingular" class='form-control-sm' />&nbsp&nbsp&nbsp&nbsp
						<span>Plural: </span><input type="text" id="tablePlural" name="tablePlural" class='form-control-sm' />&nbsp&nbsp&nbsp&nbsp
						<span>Numero de colunas: </span><span id="totalColumns" class="badge badge-primary"></span>&nbsp&nbsp&nbsp&nbsp
						<button type="button" id="addNewCOlumn" class="btn btn-info float-sm-right">Adicionar coluna</button>

						<hr>
						<div id="header_fields" class="row">
							<div class="col-sm"><b>Display Name</b></div>
							<div class="col-sm"><b>Html hame</b></div>
							<div class="col-sm"><b>Html type</b></div>
							<div class="col-sm"><b>Migration Type</b></div>
							<div class="col-sm"><b>Nullable</b></div>
							<div class="col-sm"><b>Default</b></div>
							<div class="col-sm"><b></b></div>
						</div>
						<div id="fields">
						</div>

						<input type="text" id="jsonTableOutPut" name="jsonTableOutPut"><br>
						<!-- <textarea  id="jsonOutPut" name="jsonOutPut"></textarea><br> -->
						</div>
					</form>
					

					<button id="updateJsonTable" class="btn btn-success">Salvar tabela</button>


						<!-- <button id="updateJson">Atualizar	</button> -->




				<div id="newJson"></div>
			</div>
		</div>		
	</div>
</section>
<br>
<section id="codeGenerator">
	<div class="container">
		
		<div class="row">
			<div class="col-sm">
				<ul class="nav nav-tabs" id="myTab" role="tablist">
				  <li class="nav-item">
				    <a class="nav-link active" id="routesDiv-tab" data-toggle="tab" href="#routesDiv" role="tab" aria-controls="routesDiv" aria-selected="true">Routes</a>
				  </li>
				  <li class="nav-item">
				    <a class="nav-link" id="controllerDiv-tab" data-toggle="tab" href="#controllerDiv" role="tab" aria-controls="controllerDiv" aria-selected="false">Controller</a>
				  </li>
				  <li class="nav-item">
				    <a class="nav-link" id="modelDiv-tab" data-toggle="tab" href="#modelDiv" role="tab" aria-controls="modelDiv" aria-selected="false">Model</a>
				  </li>
				  <li class="nav-item">
				    <a class="nav-link" id="requestDiv-tab" data-toggle="tab" href="#requestDiv" role="tab" aria-controls="requestDiv" aria-selected="false">Request</a>
				  </li>

				</ul>
				<div class="tab-content" id="myTabContent">
					  <div class="tab-pane fade show active" id="routesDiv" role="tabpanel" aria-labelledby="home-tab">
					  		<textarea id="routes_string_output"></textarea>
					  		<p><button id="generateRoutes" type="button" class="btn btn-default">Gerar rotas</button></p>
					  </div>
					  <div class="tab-pane fade" id="controllerDiv" role="tabpanel" aria-labelledby="controllerDiv-tab">
					  	<textarea id="controller_string_output"></textarea>
					  	<p><button id="generateController" type="button" class="btn btn-default">Gerar controlador</button></p>
					  </div>
					  <div class="tab-pane fade" id="modelDiv" role="tabpanel" aria-labelledby="modelDiv-tab">
					  	<textarea id="model_string_output"></textarea>
					  	<p><button id="generateModel" type="button" class="btn btn-default">Gerar model</button></p>
					  </div>
					  <div class="tab-pane fade" id="requestDiv" role="tabpanel" aria-labelledby="requestDiv-tab">
					  	<textarea id="request_string_output"></textarea>
					  	<p><button id="generateRequest" type="button" class="btn btn-default">Gerar request</button></p>
					  </div>

				</div>

			</div>
		</div>

		<div class="row">
			<div class="col-sm">
				<button id="backToTable" type="button" class="btn btn-danger float-sm-right">Voltar para tabela</button>
			</div>
		</div>
	</div>




</section>



<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>




</body>
<script src="index.js"></script>


</html>



