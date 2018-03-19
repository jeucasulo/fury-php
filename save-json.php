<?php
	
	if(isset($_POST['jsonOutPut'])){
			$fp = fopen('table1.json', 'w');
			$response = $_POST['jsonOutPut'];
			
			$response = str_replace(" | " , "\n", $response);

			fwrite($fp, $response); 
			fclose($fp);
		    // header("Location: ".$_SERVER['HTTP_REFERER'].""); // return for the last page
	}else{
		echo "not found";
		print_r($_POST);
	}
	
?>


