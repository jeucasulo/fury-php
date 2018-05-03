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
	if(isset($_POST['newFileName'])){
		echo "atualizando...";
		$tables = new Tables();
		$tables->ChangeTableFileName();
	}
	if(isset($_POST['newTable'])) {
		$tables = new Tables();
		$tables->CreateNewTable();
	}
	if(isset($_POST['dirPath'])){

		// $actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

		$dirPath = $_POST['dirPath'];
		$fileName = $_POST['fileName'];

		$dirPath = array_filter($dirPath, function($item) {
		  return $item != null;
		});

		$viewCrudName = implode("|",$_POST['viewCrudName']);


		// $dirPath = $actual_link .  implode("", $dirPath);
		$dirPath = implode("", $dirPath);
		$fileName = implode("", $fileName);

		// $myPath = getcwd()."/app/http/controllers"; // é pasta
		if(isset($_POST['viewCrudName'])){
			$myPath = getcwd().$dirPath."/".$viewCrudName; // é pasta
			echo "its a crud name!\n\n";
		}else{
			$myPath = getcwd().$dirPath; // é pasta
			echo "isnt a crud name at all sorry\n\n";

		}
		$myPath2 = getcwd()."//app/http/controllers"; // é pasta
		$myPathHttpHoster = "http://$_SERVER[HTTP_HOST]";
		$myPathRequestURI = "$_SERVER[REQUEST_URI]";
		
		// echo "dirPath: \t\t" . $dirPath;
		// echo "\n";
		// echo "getcwd: \t\t" . getcwd();
		// echo "\n";
		// echo "myPath: \t\t" . $myPath;
		// echo "\n";
		// echo "myPath2: \t\t" . $myPath2;
		// echo "\n";
		// echo "myPathHttpHoster: \t\t". $myPathHttpHoster;
		// echo "\n";
		// echo "myPathRequestURI: \t\t". $myPathRequestURI;
		// echo "\n";
		print_r($_POST);

		if(is_dir($myPath)){
			echo "\n\nPasta '$myPath' existe\n\n";
		}else{
			echo "\n\nPasta '$myPath' não existia mas foi criada\n\n";
			mkdir($myPath, 0777, true);

		}




		$content = implode("",$_POST['contentToWriteFile']);
		// $myfile = fopen("app/fodaci.php", "w") or die("Unable to open file!");
		// $myfile = fopen("app/".$fileName.".php", "w") or die("Unable to open file!");
	
		$myfile = fopen($myPath."/".$fileName.".php", "w") or die("Unable to open file!");
		$txt = $content;
		fwrite($myfile, $txt);
		fclose($myfile);

    // echo json_encode($response);

	}



	class Index{
		public function UpdateTable(){
			if(isset($_POST['jsonTableOutPut'])){

					
					$response = $_POST['jsonTableOutPut'];
					
					$response = str_replace(" | " , "\n", $response);


					$responseStringToJsonConvert = json_decode($response, true);

					// print_r(gettype($data));
					// print_r($data['current_table_path']);
					$fp = fopen($responseStringToJsonConvert['current_table_path'], 'w');



					fwrite($fp, $response); 
					fclose($fp);

					print_r($response);
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
	class Tables{
		public function ChangeTableFileName(){

			$tableDir = "../tables/";
			$oldTableName = $_POST['oldFileName'];
			$newTableName = $_POST['newFileName'];

			$oldTableName = $this->CleanString($oldTableName);
			$newTableName = $this->CleanString($newTableName);
			
			$oldTableName = $tableDir.$oldTableName;
			$newTableName = $tableDir.$newTableName;

			$oldTableName = $oldTableName.".json";
			$newTableName = $newTableName.".json";

			echo $oldTableName;
			echo "\n";
			echo $newTableName;

			rename($oldTableName, $newTableName);

		}
		public function CreateNewTable(){
			
			// echo "CreateNewTable";
			$tableDir = "../tables/";
			$fileName = $tableDir.$_POST['newTable'].".json";


			$myObj = new stdClass();
			$myObj->table_name = "Usuario";
			$myObj->singular = "usuario";
			$myObj->plural = "usuarios";
			$myObj->current_table_path = $fileName;
			// $myObj->fields = ["id"=>"1"];
			$myObj->fields = array(
				array("id"=>"1",
					"display_name"=>"Id",
					"html_name"=>"id",
					"html_type"=>"number",
					"migration_type"=>"integer",
					"nullable"=>"true",
					"create_view_visibility"=>"false",
					"index_view_visibility"=>"true",
					"show_view_visibility"=>"true",
					"edit_view_visibility"=>"false",
					"index"=>"PK","default"=>"auto-increment")
			);

			// $json = json_encode(array(
			//      	"table_name" => "tableName",
			//         "singular" => "1.0",
			//         "plural" => "xxxxxx",
			//         "current_table_path" => "1.0",
			//         "fields" => array(
			//         	"id"=>1,
			//         	"display_name"=>"Id",
			//         	"html_name"=>"id",
			//         	"html_type"=>"number",
			//         	"migration_type"=>"integer",
			//         	"nullable"=>"true",
			//         	"create_view_visibility"=>"false",
			//         	"index_view_visibility"=>"true",
			//         	"show_view_visibility"=>"true",
			//         	"show_view_visibility"=>"true",
			//         	"edit_view_visibility"=>"true",
			//         	"index"=>"PK",
			//         	"default"=>"auto-increment"
			//         ),
			     
			// ));
			
			// $json = json_encode($json, JSON_PRETTY_PRINT);
			// $json = str_replace("\n,"\\n",$json);

			echo json_encode($myObj);

			
			// https://stackoverflow.com/questions/15810257/create-nested-json-object-in-php
			
			// echo gettype($myObj);

			// $myJSON = json_encode($myObj);



			// echo($myJsonString);
			// $myJsonString = json_decode($myJsonString);

			$fp = fopen($fileName, 'w');
			fwrite($fp, json_encode($myObj));
			fclose($fp);
			// 


		}
		public function CleanString($string) {
		   $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
		   $string = preg_replace(array("/(á|à|ã|â|ä)/","/(Á|À|Ã|Â|Ä)/","/(é|è|ê|ë)/","/(É|È|Ê|Ë)/","/(í|ì|î|ï)/","/(Í|Ì|Î|Ï)/","/(ó|ò|õ|ô|ö)/","/(Ó|Ò|Õ|Ô|Ö)/","/(ú|ù|û|ü)/","/(Ú|Ù|Û|Ü)/","/(ñ)/","/(Ñ)/"),explode(" ","a A e E i I o O u U n N"),$string);

		   return preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
		}

	}
	
	
?>


