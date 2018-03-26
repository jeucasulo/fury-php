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
<!-- 	
 	


 	<link rel="stylesheet" href="https://bootswatch.com/4/cosmo/bootstrap.min.css" crossorigin="anonymous">

 	<link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" crossorigin="anonymous">
	<link rel="stylesheet" href="https://bootswatch.com/4/sandstone/bootstrap.min.css" crossorigin="anonymous">
 	<link rel="stylesheet" href="https://bootswatch.com/4/cyborg/bootstrap.min.css" crossorigin="anonymous">
	<link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" crossorigin="anonymous">
	<link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css" crossorigin="anonymous">
	<link rel="stylesheet" href="https://bootswatch.com/4/journal/bootstrap.min.css" crossorigin="anonymous">
	<link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css" crossorigin="anonymous">
	<link rel="stylesheet" href="https://bootswatch.com/4/lumen/bootstrap.min.css" crossorigin="anonymous">
	<link rel="stylesheet" href="https://bootswatch.com/4/materia/bootstrap.min.css" crossorigin="anonymous">
 	<link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.min.css" crossorigin="anonymous">
 	<link rel="stylesheet" href="https://bootswatch.com/4/pulse/bootstrap.min.css" crossorigin="anonymous">
 	<link rel="stylesheet" href="https://bootswatch.com/4/simplex/bootstrap.min.css" crossorigin="anonymous">
 	<link rel="stylesheet" href="https://bootswatch.com/4/sketchy/bootstrap.min.css" crossorigin="anonymous">
 	<link rel="stylesheet" href="https://bootswatch.com/4/slate/bootstrap.min.css" crossorigin="anonymous">
 	<link rel="stylesheet" href="https://bootswatch.com/4/solar/bootstrap.min.css" crossorigin="anonymous">
 	<link rel="stylesheet" href="https://bootswatch.com/4/spacelab/bootstrap.min.css" crossorigin="anonymous">
 	<link rel="stylesheet" href="https://bootswatch.com/4/superhero/bootstrap.min.css" crossorigin="anonymous">
 	<link rel="stylesheet" href="https://bootswatch.com/4/united/bootstrap.min.css" crossorigin="anonymous">
 	<link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" crossorigin="anonymous">




 -->	

 	<link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" crossorigin="anonymous">

	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>


<div class="se-pre-con"></div>


<section id="myNavBar">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand float" href="#">Fury</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse " id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">
	      
	    </ul>
	    <form class="form-inline my-2 my-lg-0">
	      
	        <a class="nav-link" href="#">Configurações<span class="sr-only">(current)</span></a>
	        <a class="nav-link" href="#">Instruções<span class="sr-only">(current)</span></a>
	        <a class="nav-link" href="#">Tabelas<span class="sr-only">(current)</span></a>
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
						<span>Numero de colunas: </span><span id="totalColumns" name="totalColumns" class="badge badge-primary"></span> <input type="text" id="totalColumnsInput"/> &nbsp&nbsp&nbsp&nbsp
						<button type="button" id="addNewCOlumn" class="btn btn-info float-sm-right">Adicionar coluna</button>

						<hr>
						<div id="header_fields" class="row text-center">
							<div class="col-custom"><b>Display Name</b></div>
							<div class="col-custom"><b>Html hame</b></div>
							<div class="col-custom"><b>Html type</b></div>
							<div class="col-custom"><b>Migration Type</b></div>
							<div class="col-custom-sm"><b>Null</b></div>
							<div class="col-custom" style="background-color: "><b title='Create | Index | Show | Edit'>Visibilidade (?)</b></div>
							<div class="col-custom" style="background-color: "><b>Index</b></div>
							<div class="col-custom" style="background-color: "><b>Default</b></div>

							<div class="col-custom"><b></b></div>
						</div>
						<div id="fields" class="input-group input-group-sm mb-3">
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
				  <li class="nav-item">
				    <a class="nav-link" id="createViewDiv-tab" data-toggle="tab" href="#createViewDiv" role="tab" aria-controls="createViewDiv" aria-selected="false">View(Create)</a>
				  </li>
				  <li class="nav-item">
				    <a class="nav-link" id="showViewDiv-tab" data-toggle="tab" href="#showViewDiv" role="tab" aria-controls="showViewDiv" aria-selected="false">View(Show)</a>
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
					  <div class="tab-pane fade" id="createViewDiv" role="tabpanel" aria-labelledby="createViewDiv-tab">
					  	<textarea id="createView_string_output"></textarea>
					  	<p><button id="generateCreateView" type="button" class="btn btn-default">Gerar Create View </button></p>
					  </div>
					  <div class="tab-pane fade" id="showViewDiv" role="tabpanel" aria-labelledby="showViewDiv-tab">
					  	<textarea id="showView_string_output"></textarea>
					  	<p><button id="generateShowView" type="button" class="btn btn-default">Gerar Create View </button></p>
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

<br>

<select id="currentTable" name="currentTable" class="form-control-sm">
<?php
if ($handle = opendir('../tables')) {
    // echo "Manipulador de diretório: $handle\n";
    echo "Arquivos:\n<br>";

    /* Esta é a forma correta de varrer o diretório */
    while (false !== ($file = readdir($handle))) {
        if(strlen($file)>2){
        echo "<option>$file</option><";
        }
    }
}else{
    echo $_SERVER['REQUEST_URI'].'tables';
    echo $handle;
}
?>
</select>
<br>
Current table:
<label id="currentTableStatic"></label>


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>




</body>
<script src="index.js"></script>


</html>



