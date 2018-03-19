$(document).ready(function(){
	Index.GettingJsonTableData();
	Index.SetingSelects();
	Index.CreatingNewJsonFile();
	$("#updateJsonTable").click(Index.UpdatingAndSavingCode);
	$("#addNewCOlumn").click(Index.AddNewColumn);
	$(".deleteColumn").on('click', "deleteColumn",Index.DeleteColumn);
	
	// $("#updateJsonTable").click(function(e){
	//   // e.preventDefault();
	// });



});
var Globals = {
	tableName :"table1.json",
	totalColumns : $("#totalColumns").html(),

};


var Index ={
	GettingJsonTableData:function(){
			// alert(Globals.tableName);

			var fieldsList ="";
			
			$.getJSON( "table1.json", function( myObj ) {
			let totalColumns = 0;
			let lastId = myObj.fields[(myObj.fields.length-1)].id;
			lastId +=1;
			// let lastId = 0;
			for (i = 0; i < myObj.fields.length; i++) {
	    		fieldsList += "<div class='columnDiv' id='divColumn"+[i]+"'>";
			    fieldsList += "Display name: <input type='text' id='display_name" + [i] + "' name='display_name" + [i] + "' value='" + myObj.fields[i].display_name + "' class='totalColumns' /> &nbsp";
			    fieldsList += "Html hame: <input type='text' id='html_name" + [i] + "' name='html_name" + [i] + "' value='" + myObj.fields[i].html_name + "' class='totalColumns' /> &nbsp";
			    fieldsList += "Html type: <select id='html_type" + [i] + "' name='html_type" + [i] + "'  class='totalColumns'>"+
										    "<option value='text'>text</option>" +
										    "<option value='checkbox'>checkbox</option>" +
										    "<option value='number'>number</option>" +
										    "<option value='image'>image</option>" +
										    "<option value='email'>email</option>" +
										    "<option value='password'>password</option>" +
									    "</select> ";
			    fieldsList += "Migration Type<select id='migration_type" + [i] + "' name='migration_type" + [i] + "' >" +
									        "<option value='varchar'>varchar</option>" +
									        "<option value='integer'>integer</option>" +
									        "<option value='date'>date</option>" +
									        "<option value='image'>image</option>" +
									        "<option value='boolean'>boolean</option>" +
									        "<option value='checkbox'>checkbox</option>" +
								        "</select> ";
		        fieldsList += "Nullable: <input type='text' id='nullable" + [i] + "' name='nullable" + [i] + "' value='" + myObj.fields[i].nullable + "'  /> ";
		        fieldsList += "Default: <input type='text' id='default" + [i] + "' name='default" + [i] + "' value='" + myObj.fields[i].default + "'  /> ";
		        fieldsList += "<button type='button' id='"+[i]+"' name='DeleteColumn"+[i]+"' class='deleteColumn' onclick='Index.DeleteColumn(this)' >Remover</button>";
		        fieldsList += "</br>";
		        fieldsList += "</div>";
		        fieldsList += "\n";

		        totalColumns++;
		        // lastId++;
		        // alert(lastId);
			}
			$("#totalColumns").html(totalColumns);
			// console.log(fieldsList);
			$("#fields").html(fieldsList);
			$("#tableName").val(myObj.table_name);
			$("#tableSingular").val(myObj.singular);
			$("#tablePlural").val(myObj.plural);
			$("#lastId").html(lastId);
		});
	},
	SetingSelects(){
		$.getJSON( "table1.json", function( myObj ) {
			for (i = 0; i < myObj.fields.length; i++) {
				$("#html_type"+i).val(myObj.fields[i].html_type);
				$("#migration_type"+i).val(myObj.fields[i].migration_type);
				// alert(myObj.fields[i].migration_type);
			}
		});

	},
	CreatingNewJsonFile:function(){
		let tableName = $("#tableName").val();
		let tableSingular = $("#tableSingular").val();
		let tablePlural = $("#tablePlural").val();
		let totalColumns = $("#totalColumns").html();
		let newJsonFile = "{ | \n\t";
		newJsonFile += "\"table_name\":\""+tableName+"\", | \n\t";
		newJsonFile += "\"singular\":\""+tableSingular+"\", | \n\t";
		newJsonFile += "\"plural\":\""+tablePlural+"\", | \n\t";
		newJsonFile += "\"fields\":[ | \n\t";

		// for(var i = 0;i<=(totalColumns-1);i++){
		for(var i = 0;i<totalColumns;i++){

    		let newDisplayName = $("#display_name"+i).val();
    		let newHtmlName = $("#html_name"+i).val();
    		let newHtmlType = $("#html_type"+i).val();
    		let newMigrationType = $("#migration_type"+i).val();
    		let newNullable = $("#nullable"+i).val();
    		let newDefault = $("#default"+i).val();

    		if(newDisplayName!=null){ // determines if the columns is UNDEFINED, since it is UNDEFINED the newJsonString will NOT add this line!
			// console.log("Não é UNDEFINED");
			newJsonFile += "\t\t{\"id\":" + (i+1) + ",";
			newJsonFile += "\"display_name\":\"" + newDisplayName + "\",";
			newJsonFile += "\"html_name\":\"" + newHtmlName + "\",";
			newJsonFile += "\"html_type\":\"" + newHtmlType + "\",";
			newJsonFile += "\"migration_type\":\"" + newMigrationType + "\",";
			newJsonFile += "\"nullable\":\"" + newNullable + "\",";
			newJsonFile += "\"default\":\"" + newDefault + "\"";
			newJsonFile += "}";
    			if(i<totalColumns-1){
					newJsonFile += ",";
					newJsonFile += " | \n\t";
    			}else{
    				newJsonFile += " | \n";
    			}
			}else{
				// console.log("UNDEFINED, total column +1");
				totalColumns++;
			}
			// console.log(i);
		}
			newJsonFile += "\t] | \n";
			newJsonFile += "}";

			console.log(newJsonFile);
			$("#jsonOutPut").val(newJsonFile);
	},
	UpdatingAndSavingCode:function(){
		Index.CreatingNewJsonFile();
		Index.SavingNewJsonFile();
	},
	AddNewColumn:function(){
		
		let lastId = $("#lastId").html();
		let newColumnId = $("#lastId").html();
		let newTotalColumns = (parseInt($("#totalColumns").html()) + 1);
		let newColumnHtml = "";

	    newColumnHtml += "<div class='columnDiv' id='divColumn"+newColumnId+"'>";
	    newColumnHtml += "Display name: <input type='text' id='display_name" + newColumnId + "' name='display_name" + newColumnId + "' value='"+newColumnId+"' class='totalColumns' /> &nbsp";
	    // newColumnHtml += "Display name: <input type='text' id='display_name" + newColumnId + "' name='display_name" + newColumnId + "' value='' class='totalColumns' /> &nbsp";
	    newColumnHtml += "Html hame: <input type='text' id='html_name" + newColumnId + "' name='html_name" + newColumnId + "' value='' class='totalColumns' /> &nbsp";
	    newColumnHtml += "Html type: <select id='html_type" + newColumnId + "' name='html_type" + newColumnId + "'  class='totalColumns'>"+
								    "<option value='text'>text</option>" +
								    "<option value='checkbox'>checkbox</option>" +
								    "<option value='number'>number</option>" +
								    "<option value='image'>image</option>" +
								    "<option value='email'>email</option>" +
								    "<option value='password'>password</option>" +
							    "</select> ";
	    newColumnHtml += "Migration Type<select id='migration_type" + newColumnId + "' name='migration_type" + newColumnId + "' >" +
							        "<option value='varchar'>varchar</option>" +
							        "<option value='integer'>integer</option>" +
							        "<option value='date'>date</option>" +
							        "<option value='image'>image</option>" +
							        "<option value='boolean'>boolean</option>" +
							        "<option value='checkbox'>checkbox</option>" +
						        "</select> ";
        newColumnHtml += "Nullable: <input type='text' id='nullable" + newColumnId + "' name='nullable" + newColumnId + "' value=''  /> ";
        newColumnHtml += "Default: <input type='text' id='default" + newColumnId + "' name='default" + newColumnId + "' value=''  /> ";
        newColumnHtml += "<button type='button' id='"+newColumnId+"' name='DeleteColumn"+newColumnId+"' class='deleteColumn' onclick='Index.DeleteColumn(this)' >Remover</button>";
        newColumnHtml += "</br>";
        newColumnHtml += "</div>";

        newColumnHtml += "\n";
        

        $("#lastId").html(parseInt(lastId)+1);


		$("#totalColumns").html(newTotalColumns);
		$("#fields").append(newColumnHtml);
		// Index.CreatingNewJsonFile();
	},
	DeleteColumn:function(objButton){
		    // alert(objButton.id);
		    let idColum= objButton.id;
		    // console.log("Deletando coluna: " + idColum);
		    

		    $( "#divColumn"+idColum+"" ).remove();

		    let newTotalColumns = $("#totalColumns").html();
			newTotalColumns = parseInt(newTotalColumns) -1;
			$("#totalColumns").html(newTotalColumns);
		    // Index.CreatingNewJsonFile();

	},
	SavingNewJsonFile:function(){
		var formData = $("#saveForm").serialize();
		$.ajax({
		  data:  formData, //data to be send
		  type: "POST",
		  url: "save-json.php",
		  
		  success: function(data){
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
		    // console.log("Fail...");
		  }
		  
		});

	}

};



// function deleteColumn(objButton){  
//     alert(objButton.id);
//     let idColum= objButton.id.slice(-1); // "c";
//     alert(idColum);
    

//     $( "#"+idColum+"" ).remove();

//     let newTotalColumns = $("#totalColumns").html();
// 	newTotalColumns = parseInt(newTotalColumns) -1;
// 	$("#totalColumns").html(newTotalColumns);


//     Index.CreatingNewJsonFile();


// }
