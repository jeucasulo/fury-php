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
<br>
<br>
<div id="" class="container">
	<div id="" class="row">
		
		<div id="" class="col-12 text-center">
			<?php
			if ($handle = opendir('../tables')) {
			    // echo "Manipulador de diretório: $handle\n";
			    // echo "Arquivos:\n<br>";
				$i = 0;
			    /* Esta é a forma correta de varrer o diretório */
			    while (false !== ($file = readdir($handle))) {
			        if(strlen($file)>2){


			        	echo "<div class='text-center border'>";
			        	// echo "<h5  class='tableFiles showTable  text-center' role='alert'>";
			        	echo "<button id='".$i."' type='button' class='btn btn-block btn-primary tableFiles showTable'>";
			        	echo $file;
			        	echo "</button>";
			        	// echo "</h5>";
			        	echo "<div class='hide-table' id='divTable".$i."'>";
						echo "<p>";
						echo "<button id='".$file."' type='button' class='btn btn-block btn-success set-name'>Alterar nome</button>";
						echo "</p>";
			        	echo "</div>";
			        	echo "</div>";
			        	// echo "</br>";

			        	
			        	// echo '</tbody>';

			        	$i++;
			        }

			    }
			}else{
			    echo $_SERVER['REQUEST_URI'].'tables';
			    echo $handle;
			}
			?>
		</div>
	</div>
</div>
	

<!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>
 -->
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="form-group">
	      <form enctype=”multipart/form-data” method="POST" action="save-json.php" id="saveForm">
	        <input type="text" name="newFileName" id="newFileName" class="form-control" style="min-width: 100% !important" />
	      </form>
      </div>
      <div class="modal-body">

      	

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Descartar</button>
        <button type="button" class="btn btn-success">Salvar alterações</button>
      </div>
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
<script src="tables.js"></script>


</html>




