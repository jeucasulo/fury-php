<?php
	// print_r($_POST);
	// echo "ok";
	if(isset($_POST['jsonTableOutPut'])){
		$index = new Index();
		$index->UpdateTable();
		// Index::UpdateTable();
	}
	if(isset($_POST['jsonConfigOutput'])){
		$config = new Config();
		$config->UpdateConfig();
		// Config::UpdateConfig();
	}
	if(isset($_POST['navOutput'])){
		echo "navok";
		$template = new Template();
		$template->UpdateNav();
		echo "foi!";
	}

	if(isset($_POST['routes_string_output'])){
		// echo "routes_string_output\n\n\n<br>";
		// // $template = new Template();
		// // $template->UpdateNav();
		// echo "\n\r\tfoi!";
		$routes = new Routes();
		$routes->UpdateRoutes();
	}


	class Index{
		public function  UpdateTable(){
			if(isset($_POST['jsonTableOutPut'])){

					$response = $_POST['jsonTableOutPut'];
					
					$response = str_replace(" | " , "\n", $response);

					// print_r(gettype($response));

					$responseStringToJsonConvert = json_decode($response, true);

					// print_r(gettype($data));
					// print_r($data['current_table_path']);
					$fp = fopen($responseStringToJsonConvert['current_table_path'], 'w');



					fwrite($fp, $response); 
					fclose($fp);
				    // header("Location: ".$_SERVER['HTTP_REFERER'].""); // return for the last page
			}else{
				echo "not found";
				print_r($_POST);
			}
		}
	}
	Class Config{
		public function UpdateConfig(){
			if(isset($_POST['jsonConfigOutput'])){
				echo($_POST['jsonConfigOutput']);
				$fp = fopen('config.json', 'w');
				$response = $_POST['jsonConfigOutput'];
				
				$response = str_replace("|" , "\n", $response);
				$response = str_replace("§" , "\\n", $response);
				
				fwrite($fp, $response); 
				fclose($fp);
				echo "foi";
			}else{
				echo "fudeu";
			}
		}
	}
	Class Template{
		public function UpdateNav(){
			if(isset($_POST['navOutput'])){
				echo($_POST['navOutput']);
				$fp = fopen('template.json', 'w');
				$response = strip_tags($_POST['navOutput']);
				
				// $response = str_replace("|" , "\n", $response);
				
				fwrite($fp, $response); 
				fclose($fp);
				echo "foi";
			}else{
				echo "fudeu";
			}

		}
	}
	Class Routes{
		public function UpdateRoutes(){
			if(isset($_POST['routes_string_output'])){
				
				// echo($_POST['routes_path']);
				// $fp = fopen('web.php', 'w');
				

				// if contains string on file
				if( strpos(file_get_contents($_POST['routes_path']),$_POST['routes_string_output']) !== false) {
				    $response = array("title"=>"Atenção","message"=>"Rotas já existem","class"=>"bg-warning");
				    // echo json_encode($response);

				} else{
					// echo "Rotas inseridas com sucesso!";
					// appends routes to the web file
					$myfile = file_put_contents($_POST['routes_path'], $_POST['routes_string_output'] , FILE_APPEND | LOCK_EX);
					$response = array("title"=>"Êxito","message"=>"Rotas inseridas com sucesso!","class"=>"bg-success");
				}
				
			    echo json_encode($response);

				// $response = strip_tags($_POST['navOutput']);
				
				// $response = str_replace("|" , "\n", $response);
				
				// fwrite($fp, $response); 
				// fclose($fp);
				// echo "foi";
				// 
				// $myfile = file_put_contents('web.php', $txt.PHP_EOL , FILE_APPEND | LOCK_EX);

			}else{
				echo "Erro PHP script";
			}

		}
	}
	
	
?>


