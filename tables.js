$(document).ready(function(){

		$(".se-pre-con").fadeOut(1000);;

		Tables.HideElements();

		Tables.GetTables();

		$(".showTable").click(function(){
			
			let id = $(this).attr("id");
			$("#divTable"+id).fadeToggle();
			// console.log(id);
		});

		$(".set-name").click(function(){
			// alert($(this).attr("id"));
			let newFileNameVar = $(this).attr("id");
			$("#newFileName").val(newFileNameVar);
			$("#oldFileName").val(newFileNameVar);
			$("#exampleModal").modal("show");
			
		});

		$("#createNewTableModalBtn").click(function(){
			// alert($(this).attr("id"));
			$("#createNewTableModal").modal("show");
			
		});



		//
		//
		$("#saveNewTableName").click(Tables.SaveNewTableName);
		$("#createNewTable").click(Tables.CreateNewTable);
		
});

var Tables = {
	HideElements:function(){
		// alert("asdf");
		$(".hide-table").hide();
	},
	GetTables:function(){
		let iterator = 0;
		$.each($(".tableFiles"), function( index, value ) {
		  let fileName = $(this).html();

		//concatantes the .json extension in the stringFileName so it can be read and found by its real file name on the direcotry
		  fileName = fileName+".json"; 
		  // console.log( index + ": " + fileName );
		  

			$.getJSON("../tables/"+fileName, function( myObj ) {
					let totalColumns = 0;
					// let lastId = myObj.fields[(myObj.fields.length-1)].id;
					let myString = "";
					// lastId +=2;
					// let lastId = 0;
					// let myDiv;
					myString +=  "<table class='table table-sm table-hover'>";
					        	myString += "<thead>";
								myString += "<tr>";
								myString += "<th scope='col'>Name</th>";
								myString += "<th scope='col'>Html name</th>";
								myString += "<th scope='col'>Html type</th>";
								myString += "<th scope='col'>Migration type</th>";
								myString += "<th scope='col'>Nullable</th>";
								myString += "</tr>";
								myString += "</thead>";
								myString += "<tbody>";

					// 
					for (i = 0; i < myObj.fields.length; i++) {
						// $("#divTable").html();
						myString +=  "<tr>";
						myString +=  "<td>";
						myString +=  myObj.fields[i].display_name;
						myString +=  "</td>";
						myString +=  "<td>";
						myString +=  myObj.fields[i].html_name;
						myString +=  "</td>";
						myString +=  "<td>";
						myString +=  myObj.fields[i].html_type;
						myString +=  "</td>";
						myString +=  "<td>";
						myString +=  myObj.fields[i].migration_type;
						myString +=  "</td>";
						myString +=  "<td>";
						myString +=  myObj.fields[i].nullable;
						myString +=  "</td>";



						myString +=  "</tr>";


						
						
						totalColumns++;
					}
								myString += "</tbody>";

					myString +=  "</table>";

					$("#divTable"+iterator).prepend(myString);
			    	// console.log("columns total:" + totalColumns);
			    	// console.log("my string: " + myString);
			    	iterator++;
			});

		});



	},
	SaveNewTableName:function(){
		// alert("sdfsadf");
		var formData = $("#saveForm").serialize();
		$.ajax({
		  data:  formData, //data to be send
		  type: "POST",
		  url: "save-json.php",
		  
		  success: function(data){
		    console.log("Success...");
		    alert(data);
		    location.reload();

		  },
		  error: function(data){
		    console.log("Fail...");
		    console.log(data);
		  }
		});

	},
	CreateNewTable:function(){
		// alert("CreateNewTable");
		var formData = $("#createTable").serialize();
		$.ajax({
		  data:  formData, //data to be send
		  type: "POST",
		  url: "save-json.php",
		  
		  success: function(data){
		    console.log("Success...");
		    alert(data);
		    location.reload();

		  },
		  error: function(data){
		    console.log("Fail...");
		    console.log(data);
		  }
		});

	}
};