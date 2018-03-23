$(document).ready(function(){
	Index.GetingJsonData();
	Index.GetingIdOnMouseOver();
	$("#updateConfig").click(Index.CreateAndSaveJsonFile);
});

var Index = {
	GetingJsonData:function(){
		// alert("sadf")
		
		$.getJSON( "config.json", function(data) {
			$("#controllerPath").val(data.controller_path);
			$("#modelPath").val(data.model_path);
			$("#requestPath").val(data.request_path);
			$("#viewsPath").val(data.views_path);
			$("#navOutput").val(data.nav_user);
			$("#footerOutput").val(data.footer_user);
		});
	},
	GetingIdOnMouseOver:function(){
		/* geting the id of the element on mouse hover */
		$("*").mouseover(function(){
			$(this).attr('title',$(this).attr('id'));
		});
	},
	CreatingJsonConfigString:function(){

		let controllerPath = $("#controllerPath").val();
		let modelPath = $("#modelPath").val();
		let requestPath = $("#requestPath").val();
		let viewsPath = $("#viewsPath").val();
		let navOutput = Index.ConvertingHtmlBreaklines($("#navOutput").val());
		let footerOutput = Index.ConvertingHtmlBreaklines($("#footerOutput").val());

		let jsonConfigString = "";
		jsonConfigString += "{\n|\t";
		jsonConfigString += "\"controller_path\":\""+controllerPath+"\",\n|\t";
		jsonConfigString += "\"model_path\":\""+modelPath+"\",\n|\t";
		jsonConfigString += "\"request_path\":\""+requestPath+"\",\n|\t";
		jsonConfigString += "\"views_path\":\""+viewsPath+"\",\n|\t";
		jsonConfigString += "\"nav_user\":\""+navOutput+"\",\n|\t";
		jsonConfigString += "\"footer_user\":\""+footerOutput+"\",\n|\t";
		jsonConfigString += "\"nav\":[\n|\t\t";
		jsonConfigString += "{\"id\":1,\"name\":\"Default(Bootstrap)\",\"html\":\"<html>NavDefaultBootstrap</html>\"}\n|\t";
		jsonConfigString += "],\n|\t";
		jsonConfigString += "\"footer\":[\n|\t\t";
		jsonConfigString += "{\"id\":1,\"name\":\"Default(Bootstrap)\",\"html\":\"<html>FooterDefaultBootstrap</html>\"}";
		jsonConfigString += "\n|\t]\n|";
		jsonConfigString += "}";

		// console.log(jsonConfigString);

		$("#jsonConfigOutput").val(jsonConfigString);
	},
	ConvertingHtmlBreaklines:function(str){
		strArray = str.split("\n");
		let strOutput = "";
			for(let i = 0;i<(strArray.length-1);i++){
				strOutput += strArray[i] + "§\n";
			}
		return strOutput;
	},
	CreateAndSaveJsonFile(){
		Index.CreatingJsonConfigString();
		Index.SavingConfigJsonFile();
	},
	SavingConfigJsonFile:function(){
		var formData = $("#saveForm").serialize();
		$.ajax({
		  data:  formData, //data to be send
		  type: "POST",
		  url: "save-json.php",
		  
		  success: function(data){
		    // console.log("Success...");
		    // alert(data);
		    // $('#success').html("<div class='alert alert-success'>");
		    // $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
		    //   .append("</button>");
		    // $('#success > .alert-success')
		    //   .append("<strong>Your message has been sent. </strong>");
		    // $('#success > .alert-success')
		    //   .append('</div>');
		  },
		  error: function(data){
		    console.log("Fail...");
		    console.log(data);
		  }
		});
	}
};
