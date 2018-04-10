<!DOCTYPE html>
<html lang=”pt-br”>
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
		        <a class="nav-link" href="#">CRUDS<span class="sr-only">(current)</span></a>
		    </form>
		  </div>
		</nav>
	</section>

<div class="container">
	<div class="row">
		<div class="col-12">
			<h1>Inserir menu de cores</h1>
			<h1 title="fodaci">Configuração</h1>
			<hr>
			<h1>Paths</h1>
			<p>Routes: 
				<input type="text" id="routesPath" name="routesPath" class="form-control" />
			</p>

			<p>Controller: 
				<input type="text" id="controllerPath" name="controllerPath" class="form-control" />
			</p>
			<p>Model: 
				<input type="text" id="modelPath" name="modelPath" class="form-control"	/>
			</p>
			<p>Request: 
				<input type="text" id="requestPath" name="requestPath" class="form-control"/>
			</p>
			<p>Views: 
				<input type="text" id="viewsPath" name="viewsPath" class="form-control" />
			</p>
			<hr>
			<h1>Views</h1>
			<h3>Nav</h3>
			<div>		
				<textarea id="navOutput" name="navOutput" class="form-control"></textarea>
			</div>

			<h3>Footer</h3>
			<div>
				<textarea id="footerOutput" name="footerOutput" class="form-control"></textarea>
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


		</div>
	</div>
</div>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>


</body>
<script src="config.js"></script>
	<script type="text/javascript">
	</script>

</html>



<style type="text/css">
	input{
		min-width: 300px;
	}
</style>