<?php
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

	class Index{
		public function  UpdateTable(){
			if(isset($_POST['jsonTableOutPut'])){
					$fp = fopen('table1.json', 'w');
					$response = $_POST['jsonTableOutPut'];
					
					$response = str_replace(" | " , "\n", $response);

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
	
	
?>


