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




<div id="" class="container">
	<div id="" class="row">
		<div id="" class="col-12">
			<h1>DivFolder</h1>
		</div>
	</div>
</div>
<hr>
<div id="" class="container">
	<div id="" class="row">
		<div id="" class="col-12">
			<div hidden="hidden">url: <label id="getcwdAdress" ><?php echo getcwd()?></label></div><br>
			Path:<label id="newAdress"></label><br>
			<!-- remove:<label id="removeAdress"></label><br><br> -->
			<!-- id:<label id="id"></label><br><br> -->
			<hr>
				<?php
					// function listIt($path,$iterator) {
					// $items = scandir($path);
					
					// foreach($items as $key => $item) {
					//     // echo $item[$key];
					//     // Ignore the . and .. folders
					//     if($item != "." and $item != ".." and $item !=".git" and $item != "") {
					//         if (is_file($path ."\\". $item)) {
					//             // this is the file
					//             // echo "-> " . $item . "<br>";
					//         } else {
					//             $myClass = $key.$path."/".$item;
					//             // this is the directory
					//             // do the list it again!
					//             if($iterator == 0){
					// 	            echo "<div  id='".$key.$path."/".$item."' class='togleFolder' style='display'>";
					//             }elseif($iterator == 1){
					//             	echo "<div  id='".$key.$path."/".$item."' class='togleFolder' style='padding-left: 20px'>";
					//             }elseif($iterator ==2){
					//             	echo "<div  id='".$key.$path."/".$item."' class='togleFolder' style='padding-left: 40px'>";
					//             }
					//             // echo "<img src='open-iconic/svg/folder.svg' alt='icon name'> " . $item;
				 //            		echo $item;
				 //            		echo "-";
				 //            		echo $iterator;
				 //            		echo "</br>";
				 //            		// echo "<div>".$iterator."</div>";
			  //           			// $newPath = $path."\\".$item;
			  //           			// $newPath = str_replace("//", "/", $newPath);
				 //            		// $item = $oldPath.$item;
					// 			echo "</div>";
					// 			if($key <= count($items)){
					// 				listIt($path ."\\". $item, $iterator);
					// 			}else{
					// 				listIt($path ."\\". $item, $iterator);
					// 			}

					//         }
					//     }
					//   }
					// }
					// echo "<div style='padding-left: 10px'>";
					// listIt(getcwd(),0);
					// echo "</div>";
					// echo "</br>";
					// echo "</br>";
					// echo "</br>";
					// echo "</br>";
				?>

					<!-- <hr> -->
					<?php
					function listFolderFiles($dir){
					    $ffs = scandir($dir);

					    unset($ffs[array_search('.', $ffs, true)]);
					    unset($ffs[array_search('..', $ffs, true)]);
					    unset($ffs[array_search('.git', $ffs, true)]);

					    // prevent empty ordered elements
					    if (count($ffs) < 1)
					        return;

					    echo '<ol>';
					    foreach($ffs as $ff){
					        if(is_dir($dir.'/'.$ff)){
					        echo '<li>';
					        echo '<span class= "togleFolder" id="'.$dir.'/'.$ff.'">'.$ff.'</span><span><button class="btnChoose">Choose</button></span>';
					        if(is_dir($dir.'/'.$ff)) listFolderFiles($dir.'/'.$ff);
					        echo '</li>';
					        }
					    }
					    echo '</ol>';
					}

					listFolderFiles(getcwd());

					?>
				
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
<!-- <script src="index.js"></script> -->


<script type="text/javascript">
	$(document).ready(function(){
		// $(".order1").slideUp();
		// $(".order2").slideUp();

		$(".btnChoose").click(function(){
			let myId = $(this).parent().prev().attr("id")
			let getcwdLet = $("#getcwdAdress").text();
			// console.log("myId: "+myId);
			myId = myId.replace(getcwdLet,"");
			$("#newAdress").text(myId);

		})
		$(".togleFolder").click(function(e){
			// let myId = $(this).attr("id");
			// let prevId = $(this).prev().attr("id");
			// console.log ("myId: "+myId);
			// console.log ("prevId: "+prevId);
			// alert($(this).attr("order"));
			// let vOrder = $(this).attr("order");
			// vOrder = parseInt(vOrder);
			// vOrder +=1;
			// $(".order"+vOrder).slideToggle();			
			// let adressRemove = $("#getcwdAdress").text();
			// let id = $(this).attr("id");
			// id = id.split("|s").pop();
			// console.log(adressRemove);			
			// console.log(id);
			// console.log("new: "+id.replace(adressRemove,id));
			// console.log("remove: " +adressRemove);
			// console.log("id: "+id);
			// $("#newAdress").text(id.replace(adressRemove,""));
			// $("#removeAdress").text(adressRemove);
			// $("#id").text(id);
			// let test = $(this).text();
			// alert(test);

		});
	});
</script>


</html>



