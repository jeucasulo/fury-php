$(document).ready(function(){
		$(".se-pre-con").fadeOut(1000);;

	/*----------  Index  ----------*/
	Index.HideElements();
	Index.GettingJsonTableData();
	Index.GettingJsonConfigData();
	Index.SetingSelects();
	Index.SetingCheckboxes();
	Index.CreatingNewJsonFile();
	Index.GetingIdOnHover();
	Index.StartApp();


	// $("#generateControllerFile").click(function(){
	// 	alert("sadf");
	// });
	$("#generateControllerFile").click(Controller.GenerateItemFile);
	$("#generateModelFile").click(Controller.GenerateItemFile);
	$("#generateRequestFile").click(Controller.GenerateItemFile);
	
	$("#generateCreateViewFile").click(Controller.GenerateItemFile);
	$("#generateIndexViewFile").click(Controller.GenerateItemFile);
	$("#generateShowViewFile").click(Controller.GenerateItemFile);
	$("#generateEditViewFile").click(Controller.GenerateItemFile);
});

var Globals = {
	CurrentTableName :"../tables/"+ $("#currentTable").val(),
	current_table_path : $("#currentTableStatic").html(),
	totalColumns : $("#totalColumns").html(),
};
var Index = {
	StartApp:function(){
			// Index.GetingIdOnHover();
			// $("#updateJsonTable").click(Index.UpdatingAndSavingCode);
			$("#updateJsonTable").on("click", Index.UpdatingAndSavingCode);
			// $("#addNewCOlumn").click(Index.AddNewColumn);
			$("#addNewCOlumn").on("click", Index.AddNewColumn);
			$(".deleteColumn").on("click", "deleteColumn",Index.DeleteColumn);
			// $("#backToTable").click(Index.BackToTable);
			$("#backToTable").on("click", Index.BackToTable);

			/*----------  Routes  ----------*/
			// $("#generateRoutes").click(Routes.GenerateRoutesString);
			$("#generateRoutes").on("click",Routes.GenerateRoutesString);
			// $("#generateRoutesFile").click(Routes.GenerateRoutesFile);
			$("#generateRoutesFile").on("click", Routes.GenerateRoutesFile);

			/*----------  Controller  ----------*/
			// $("#generateController").click(Controller.GenerateControllerString);
			$("#generateController").on("click", Controller.GenerateControllerString);

			/*----------  Model  ----------*/
			// $("#generateModel").click(Model.GenerateModelString);
			$("#generateModel").on("click", Model.GenerateModelString);

			/*----------  Request  ----------*/
			// $("#generateRequest").click(Request.GenerateRequestString);
			$("#generateRequest").on("click", Request.GenerateRequestString);
			
			/*----------  Views  ----------*/
			// $("#generateCreateView").click(Views.GenerateCreateView);
			$("#generateCreateView").on("click", Views.GenerateCreateView);
			// $("#generateShowView").click(Views.GenerateShowView);
			$("#generateShowView").on("click", Views.GenerateShowView);
			// $("#generateIndexView").click(Views.GenerateIndexView);
			$("#generateIndexView").on("click", Views.GenerateIndexView);
			// $("#generateEditView").click(Views.GenerateEditView);
			$("#generateEditView").on("click", Views.GenerateEditView);


			$("#currentTableStatic").html(Globals.CurrentTableName);
			// $("#tableNameLabel").html($("#tableName").val());

		 	//    $('body').on('click','#tableName',function(){
			//       alert($(this).attr('id'));
			// }); 
			$("#currentTable").on("change", function(){
					Globals.CurrentTableName = "../tables/"+ $("#currentTable").val();
					$("#currentTableStatic").html(Globals.CurrentTableName);			
					Index.GettingJsonTableData();
					Index.SetingSelects();
					Index.SetingCheckboxes();
			});

			// console.log("ok");
	},
	HideElements:function(){
		$("#jsonTableOutPut").hide();
		$("#tutorialJson").hide();
		$("#lastId").hide();
		$("#lastIdSpan").hide();
		$("#codeGenerator").hide();
		$("#hiddenLabels").hide();
		// $("#totalColumns").hide();
		// $("#totalColumnsInput").hide();
	},
	GettingJsonTableData:function(){

			let currentTable = Globals.CurrentTableName;
			// console.log("GettingJsonTableData. CurrentTable: "+currentTable);
			let fieldsList ="";
			
			$.getJSON(currentTable, function( myObj ) {
			let totalColumns = 0;
			let lastId = myObj.fields[(myObj.fields.length-1)].id;
			lastId +=2;
			// let lastId = 0;
			for (i = 0; i < myObj.fields.length; i++) {
	    		
	    		fieldsList += "<div class='columnDiv row text-center' id='divColumn"+[i]+"'>";
			    fieldsList += "<div class='col-custom'><input type='text' id='display_name" + [i] + "' name='display_name" + [i] + "' value='" + myObj.fields[i].display_name + "' class='totalColumns form-control-sm' /></div>";
			    fieldsList += "<div class='col-custom'><input type='text' id='html_name" + [i] + "' name='html_name" + [i] + "' value='" + myObj.fields[i].html_name + "' class='totalColumns form-control-sm' /> </div>";
			    fieldsList += "<div class='col-custom'><select id='html_type" + [i] + "' name='html_type" + [i] + "'  class='totalColumns form-control-sm'>"+
										    "<option value='text'>text</option>" +
										    "<option value='checkbox'>checkbox</option>" +
										    "<option value='radio'>radio</option>" +
										    "<option value='number'>number</option>" +
										    "<option value='image'>image</option>" +
										    "<option value='email'>email</option>" +
										    "<option value='password'>password</option>" +
										    "<option value='file'>file</option>" +
										    "<option value='range'>range</option>" +
										    "<option value='' disabled><hr></option>" + // disabled
										    "<option value='color'>color</option>"+
										    "<option value='date'>date</option>"+
										    "<option value='datetime-local'>datetime</option>"+
										    "<option value='email'>email</option>"+
										    "<option value='month'>month</option>"+
										    "<option value='range'>range</option>"+
										    "<option value='search'>search</option>"+
										    "<option value='tel'>tel</option>"+
										    "<option value='time'>time</option>"+
										    "<option value='url'>url</option>"+
										    "<option value='week'>week</option>"+
										    "<option value='' disabled><hr></option>" + // disabled
										    "<option value='hidden'>hidden</option>" + 
										    "<option value='button'>button</option>" + 
										    "<option value='reset'>reset</option>" + 
										    "<option value='submit'>submit</option>" + 
									    "</select></div>";
			    fieldsList += "<div class='col-custom'><select id='migration_type" + [i] + "' name='migration_type" + [i] + "' class='form-control-sm' style='width:100px'>" +
											"<option value='binary'>binary</option>"+
											"<option value='boolean'>boolean</option>"+
											"<option value='char'>char</option>"+
											"<option value='date'>date</option>"+
											"<option value='dateTime'>dateTime</option>"+
											"<option value='decimal'>decimal</option>"+
											"<option value='double'>double</option>"+
											"<option value='float'>float</option>"+
											"<option value='increments'>increments</option>"+
											"<option value='integer'>integer</option>"+
											"<option value='json'>json</option>"+
											"<option value='rememberToken'>rememberToken</option>"+
											"<option value='string'>string</option>"+
											"<option value='text'>text</option>"+
											"<option value='time'>time</option>"+
											"<option value='timestamps'>timestamps</option>"+
											"<option value='year'>year</option>"+
											"<option value='' disabled><hr></option>"+ // disabled
											"<option value='bigIncrements'>bigIncrements</option>"+
											"<option value='bigInteger'>bigInteger</option>"+
											"<option value='dateTimeTz'>dateTimeTz</option>"+
											"<option value='enum'>enum</option>"+
											"<option value='geometry'>geometry</option>"+
											"<option value='geometryCollection'>geometryCollection</option>"+
											"<option value='ipAddress'>ipAddress</option>"+
											"<option value='jsonb'>jsonb</option>"+
											"<option value='lineString'>lineString</option>"+
											"<option value='longText'>longText</option>"+
											"<option value='macAddress'>macAddress</option>"+
											"<option value='mediumIncrements'>mediumIncrements</option>"+
											"<option value='mediumInteger'>mediumInteger</option>"+
											"<option value='mediumText'>mediumText</option>"+
											"<option value='morphs'>morphs</option>"+
											"<option value='multiLineString'>multiLineString</option>"+
											"<option value='multiPoint'>multiPoint</option>"+
											"<option value='multiPolygon'>multiPolygon</option>"+
											"<option value='nullableMorphs'>nullableMorphs</option>"+
											"<option value='nullableTimestamps'>nullableTimestamps</option>"+
											"<option value='point'>point</option>"+
											"<option value='polygon'>polygon</option>"+
											"<option value='smallIncrements'>smallIncrements</option>"+
											"<option value='smallInteger'>smallInteger</option>"+
											"<option value='softDeletes'>softDeletes</option>"+
											"<option value='softDeletesTz'>softDeletesTz</option>"+
											"<option value='timeTz'>timeTz</option>"+
											"<option value='timestamp'>timestamp</option>"+
											"<option value='timestampTz'>timestampTz</option>"+
											"<option value='timestampsTz'>timestampsTz</option>"+
											"<option value='tinyIncrements'>tinyIncrements</option>"+
											"<option value='tinyInteger'>tinyInteger</option>"+
											"<option value='unsignedBigInteger'>unsignedBigInteger</option>"+
											"<option value='unsignedDecimal'>unsignedDecimal</option>"+
											"<option value='unsignedInteger'>unsignedInteger</option>"+
											"<option value='unsignedMediumInteger'>unsignedMediumInteger</option>"+
											"<option value='unsignedSmallInteger'>unsignedSmallInteger</option>"+
											"<option value='unsignedTinyInteger'>unsignedTinyInteger</option>"+
											"<option value='uuid'>uuid</option>"+

								        "</select></div>";
		        fieldsList += "<div class='col-custom-sm'><input type='checkbox' id='nullable" + [i] + "' name='nullable" + [i] + "' value='" + myObj.fields[i].nullable + "'  class='form-control-sm' /> </div>";
		        fieldsList += "<div class='col-custom'>"+
		        	"<input title='Create | Index | Show | Edit' type='checkbox' id='create_view_visibility"+[i]+"' name='create_view_visibility' value='" + myObj.fields[i].create_view_visibility + "' class='form-control-sm' />"+
		        	"<input type='checkbox' id='index_view_visibility"+[i]+"' name='index_view_visibility' value='" + myObj.fields[i].index_view_visibility + "' class='form-control-sm ' />"+
		        	"<input type='checkbox' id='show_view_visibility"+[i]+"' name='show_view_visibility' value='" + myObj.fields[i].show_view_visibility + "' class='form-control-sm' />"+
		        	"<input type='checkbox' id='edit_view_visibility"+[i]+"' name='edit_view_visibility' value='" + myObj.fields[i].edit_view_visibility + "' class='form-control-sm' />"+
		        	"</div> ";
		        
	            fieldsList += "<div class='col-custom'><select id='index" + [i] + "' name='index" + [i] + "' class='form-control-sm'>" +
	        						        "<option value='none'>- - -</option>" +
	        						        "<option value='PK'>PK</option>" +
	        						        "<option value='Index'>Index</option>" +
	        						        "<option value='Unique'>Unique</option>" +
	        					        "</select></div>";

		        fieldsList += "<div class='col-custom'><input type='text' id='default" + [i] + "' name='default" + [i] + "' value='" + myObj.fields[i].default + "'  class='form-control-sm' /> </div> ";

		        
		        fieldsList += "<div class='col-custom'><button type='button' id='"+[i]+"' name='DeleteColumn"+[i]+"' class='deleteColumn btn btn-danger btn-sm' onclick='Index.DeleteColumn(this)' >X</button> </div>";
		        fieldsList += "</br>";
		        fieldsList += "</div>";
		        fieldsList += "\n";

		        totalColumns++;
		        // lastId++;
		        // alert(lastId);
			}
			// $("#table_name_label").html(myObj.table_name);
			// $("#table_singular_label").html(myObj.singular);
			// $("#table_plural_label").html(myObj.plural);
			// $("#totalColumnsInput").val(totalColumns);
			// console.log(fieldsList);
			$("#fields").html(fieldsList);
			// $(fieldsList).appendTo("#fields");
			$("#tableName").val(myObj.table_name);
			$("#tableSingular").val(myObj.singular);
			$("#tablePlural").val(myObj.plural);
			$("#lastId").html(lastId);

			$("#table_name_label").html($("#tableName").val());
			$("#table_singular_label").html($("#tableSingular").val());
			$("#table_plural_label").html($("#tablePlural").val());
			$("#totalColumns").html(totalColumns);

		  	



		});
	},
	GettingJsonConfigData(){
		// alert("config");
		$.getJSON( "config.json", function( data ) {
		  // alert(data.controller_path);
		  $("#routes_path").val(data.routes_path);
		  $("#routes_path_label").html(data.routes_path);
		  $("#controller_path").val(data.controller_path);
		  $("#controller_path_label").html(data.controller_path);
		  $("#model_path").val(data.model_path);
		  $("#model_path_label").html(data.model_path);
		  $("#request_path").val(data.request_path);
		  $("#request_path_label").html(data.request_path);
		  $("#create_path").val(data.views_path);
		  $("#create_path_label").html(data.views_path);
		  $("#index_path").val(data.views_path);
		  $("#index_path_label").html(data.views_path);
		  $("#show_path").val(data.views_path);
		  $("#show_path_label").html(data.views_path);
		  $("#edit_path").val(data.views_path);
		  $("#edit_path_label").html(data.views_path);
		});
	},
	SetingSelects:function(){


		let currentTable = Globals.CurrentTableName;

		$.getJSON( currentTable, function( myObj ) {
			// alert(currentTable);
			console.log(myObj);
			for (i = 0; i < myObj.fields.length; i++) {
				$("#html_type"+i).val(myObj.fields[i].html_type);
				$("#migration_type"+i).val(myObj.fields[i].migration_type);
				$("#index"+i).val(myObj.fields[i].index);
				// alert(myObj.fields[i].index);
				// alert(myObj.fields[i].migration_type);
			}
		});
	},
	SetingCheckboxes:function(){
		
		let currentTable = Globals.CurrentTableName;

		$.getJSON( currentTable, function( myObj ) {
			for (i = 0; i < myObj.fields.length; i++) {
				$("#create_view_visibility"+i).val(myObj.fields[i].create_view_visibility);
				myObj.fields[i].create_view_visibility == "true"?$("#create_view_visibility"+i).prop('checked', true):$("#create_view_visibility"+i).prop('checked', false);
				myObj.fields[i].index_view_visibility == "true"?$("#index_view_visibility"+i).prop('checked', true):$("#index_view_visibility"+i).prop('checked', false);
				myObj.fields[i].show_view_visibility == "true"?$("#show_view_visibility"+i).prop('checked', true):$("#show_view_visibility"+i).prop('checked', false);
				myObj.fields[i].edit_view_visibility == "true"?$("#edit_view_visibility"+i).prop('checked', true):$("#edit_view_visibility"+i).prop('checked', false);
				myObj.fields[i].nullable == "true"?$("#nullable"+i).prop('checked', true):$("#nullable"+i).prop('checked', false);
				// alert(currentTable);
				// alert(myObj.fields[i].nullable);
				// $("#migration_type"+i).val(myObj.fields[i].migration_type);
				// alert(myObj.fields[i].migration_type);
			}
		});

	},
	CreatingNewJsonFile:function(){
		let tableName = $("#tableName").val();
		let tableSingular = $("#tableSingular").val();
		let tablePlural = $("#tablePlural").val();
		let current_table_path = $("#currentTableStatic").html();

		$("#controller_name").val(tableName+"Controller");
		$("#model_name").val(tableName);
		$("#request_name").val(tableName+"Request");
		
		$("input[name^='viewCrudName']").val(tableName);

		$("#create_name").val("create.blade");
		$("#index_name").val("index.blade");
		$("#show_name").val("show.blade");
		$("#edit_name").val("edit.blade");

		let totalColumns = $("#totalColumns").html();
		let newJsonFile = "{ | \n\t";
		newJsonFile += "\"table_name\":\""+tableName+"\", | \n\t";
		newJsonFile += "\"singular\":\""+tableSingular+"\", | \n\t";
		newJsonFile += "\"plural\":\""+tablePlural+"\", | \n\t";
		newJsonFile += "\"current_table_path\":\""+current_table_path+"\", | \n\t";
		newJsonFile += "\"fields\":[ | \n\t";

		// for(var i = 0;i<=(totalColumns-1);i++){
		for(var i = 0;i<totalColumns;i++){

    		let newDisplayName = $("#display_name"+i).val();
    		let newHtmlName = $("#html_name"+i).val();
    		let newHtmlType = $("#html_type"+i).val();
    		let newMigrationType = $("#migration_type"+i).val();
    		let newNullable = $("#nullable"+i).is(":checked");
    		let new_create_view_visibility = $("#create_view_visibility"+i).is(":checked");
    		let new_index_view_visibility = $("#index_view_visibility"+i).is(":checked");
    		let new_show_view_visibility = $("#show_view_visibility"+i).is(":checked");
    		let new_edit_view_visibility = $("#edit_view_visibility"+i).is(":checked");
    		let newIndex = $("#index"+i).val();
    		let newDefault = $("#default"+i).val();

    		if(newDisplayName!=null){ // determines if the columns is UNDEFINED, since it is UNDEFINED the newJsonString will NOT add this line!
			// console.log("Não é UNDEFINED");
			newJsonFile += "\t\t{\"id\":" + (i+1) + ",";
			newJsonFile += "\"display_name\":\"" + newDisplayName + "\",";
			newJsonFile += "\"html_name\":\"" + newHtmlName + "\",";
			newJsonFile += "\"html_type\":\"" + newHtmlType + "\",";
			newJsonFile += "\"migration_type\":\"" + newMigrationType + "\",";
			newJsonFile += "\"nullable\":\"" + newNullable + "\",";
			newJsonFile += "\"create_view_visibility\":\"" + new_create_view_visibility + "\",";
			newJsonFile += "\"index_view_visibility\":\"" + new_index_view_visibility + "\",";
			newJsonFile += "\"show_view_visibility\":\"" + new_show_view_visibility + "\",";
			newJsonFile += "\"edit_view_visibility\":\"" + new_edit_view_visibility + "\",";
			newJsonFile += "\"index\":\"" + newIndex + "\",";
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

			// console.log(newJsonFile);
			$("#jsonTableOutPut").val(newJsonFile);

			// let tableName = $("#tableName").val();
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

	    		newColumnHtml += "<div class='columnDiv row text-center' id='divColumn"+newColumnId+"'>";
			    newColumnHtml += "<div class='col-custom'><input type='text' id='display_name" + newColumnId + "' name='display_name" + newColumnId + "' value='column"+newColumnId+"' class='totalColumns form-control-sm' /></div>";
			    newColumnHtml += "<div class='col-custom'><input type='text' id='html_name" + newColumnId + "' name='html_name" + newColumnId + "' value='' class='totalColumns form-control-sm' /> </div>";
			    newColumnHtml += "<div class='col-custom'><select id='html_type" + newColumnId + "' name='html_type" + newColumnId + "'  class='totalColumns form-control-sm' style='width:100px'>"+
										    "<option value='text'>text</option>" +
										    "<option value='checkbox'>checkbox</option>" +
										    "<option value='radio'>radio</option>" +
										    "<option value='number'>number</option>" +
										    "<option value='image'>image</option>" +
										    "<option value='email'>email</option>" +
										    "<option value='password'>password</option>" +
										    "<option value='file'>file</option>" +
										    "<option value='range'>range</option>" +
										    "<option value='' disabled><hr></option>" + // disabled
										    "<option value='color'>color</option>"+
										    "<option value='date'>date</option>"+
										    "<option value='datetime-local'>datetime</option>"+
										    "<option value='email'>email</option>"+
										    "<option value='month'>month</option>"+
										    "<option value='range'>range</option>"+
										    "<option value='search'>search</option>"+
										    "<option value='tel'>tel</option>"+
										    "<option value='time'>time</option>"+
										    "<option value='url'>url</option>"+
										    "<option value='week'>week</option>"+
										    "<option value='' disabled><hr></option>" + // disabled
										    "<option value='hidden'>hidden</option>" + 
										    "<option value='button'>button</option>" + 
										    "<option value='reset'>reset</option>" + 
										    "<option value='submit'>submit</option>" + 
									    "</select></div>";
			    newColumnHtml += "<div class='col-custom'><select id='migration_type" + newColumnId + "' name='migration_type" + newColumnId + "' class='form-control-sm'>" +
									        "<option value='binary'>binary</option>"+
											"<option value='boolean'>boolean</option>"+
											"<option value='char'>char</option>"+
											"<option value='date'>date</option>"+
											"<option value='dateTime'>dateTime</option>"+
											"<option value='decimal'>decimal</option>"+
											"<option value='double'>double</option>"+
											"<option value='float'>float</option>"+
											"<option value='increments'>increments</option>"+
											"<option value='integer'>integer</option>"+
											"<option value='json'>json</option>"+
											"<option value='rememberToken'>rememberToken</option>"+
											"<option value='string'>string</option>"+
											"<option value='text'>text</option>"+
											"<option value='time'>time</option>"+
											"<option value='timestamps'>timestamps</option>"+
											"<option value='year'>year</option>"+
											"<option value='' disabled><hr></option>"+ // disabled
											"<option value='bigIncrements'>bigIncrements</option>"+
											"<option value='bigInteger'>bigInteger</option>"+
											"<option value='dateTimeTz'>dateTimeTz</option>"+
											"<option value='enum'>enum</option>"+
											"<option value='geometry'>geometry</option>"+
											"<option value='geometryCollection'>geometryCollection</option>"+
											"<option value='ipAddress'>ipAddress</option>"+
											"<option value='jsonb'>jsonb</option>"+
											"<option value='lineString'>lineString</option>"+
											"<option value='longText'>longText</option>"+
											"<option value='macAddress'>macAddress</option>"+
											"<option value='mediumIncrements'>mediumIncrements</option>"+
											"<option value='mediumInteger'>mediumInteger</option>"+
											"<option value='mediumText'>mediumText</option>"+
											"<option value='morphs'>morphs</option>"+
											"<option value='multiLineString'>multiLineString</option>"+
											"<option value='multiPoint'>multiPoint</option>"+
											"<option value='multiPolygon'>multiPolygon</option>"+
											"<option value='nullableMorphs'>nullableMorphs</option>"+
											"<option value='nullableTimestamps'>nullableTimestamps</option>"+
											"<option value='point'>point</option>"+
											"<option value='polygon'>polygon</option>"+
											"<option value='smallIncrements'>smallIncrements</option>"+
											"<option value='smallInteger'>smallInteger</option>"+
											"<option value='softDeletes'>softDeletes</option>"+
											"<option value='softDeletesTz'>softDeletesTz</option>"+
											"<option value='timeTz'>timeTz</option>"+
											"<option value='timestamp'>timestamp</option>"+
											"<option value='timestampTz'>timestampTz</option>"+
											"<option value='timestampsTz'>timestampsTz</option>"+
											"<option value='tinyIncrements'>tinyIncrements</option>"+
											"<option value='tinyInteger'>tinyInteger</option>"+
											"<option value='unsignedBigInteger'>unsignedBigInteger</option>"+
											"<option value='unsignedDecimal'>unsignedDecimal</option>"+
											"<option value='unsignedInteger'>unsignedInteger</option>"+
											"<option value='unsignedMediumInteger'>unsignedMediumInteger</option>"+
											"<option value='unsignedSmallInteger'>unsignedSmallInteger</option>"+
											"<option value='unsignedTinyInteger'>unsignedTinyInteger</option>"+
											"<option value='uuid'>uuid</option>"+

								        "</select></div>";
		        newColumnHtml += "<div class='col-custom-sm'><input type='checkbox' id='nullable" + newColumnId + "' name='nullable" + newColumnId + "' value=''  class='form-control-sm' /> </div>";
		        newColumnHtml += "<div class='col-custom'>"+
		        	"<input title='Create | Index | Show | Edit' type='checkbox' id='create_view_visibility"+newColumnId+"' name='create_view_visibility' value='' class='form-control-sm' />"+
		        	"<input type='checkbox' id='index_view_visibility"+newColumnId+"' name='index_view_visibility' value='' class='form-control-sm ' />"+
		        	"<input type='checkbox' id='show_view_visibility"+newColumnId+"' name='show_view_visibility' value='' class='form-control-sm' />"+
		        	"<input type='checkbox' id='edit_view_visibility"+newColumnId+"' name='edit_view_visibility' value='' class='form-control-sm' />"+
		        	"</div> ";
		        
	            newColumnHtml += "<div class='col-custom'><select id='index" + newColumnId + "' name='index" + newColumnId + "' class='form-control-sm'>" +
	        						        "<option value='none'>- - -</option>" +
	        						        "<option value='PK'>PK</option>" +
	        						        "<option value='Index'>Index</option>" +
	        						        "<option value='Unique'>Unique</option>" +
	        					        "</select></div>";

		        newColumnHtml += "<div class='col-custom'><input type='text' id='default" + newColumnId + "' name='default" + newColumnId + "' value=''  class='form-control-sm' /> </div> ";

		        
		        newColumnHtml += "<div class='col-custom'><button type='button' id='"+newColumnId+"' name='DeleteColumn"+newColumnId+"' class='deleteColumn btn btn-danger btn-sm' onclick='Index.DeleteColumn(this)' >X</button> </div>";
		        newColumnHtml += "</br>";
		        newColumnHtml += "</div>";
		        newColumnHtml += "\n";




        $("#lastId").html(parseInt(lastId)+1);


		$("#totalColumns").html(newTotalColumns);
		$("#fields").append(newColumnHtml);
	},
	DeleteColumn:function(objButton){
		    let idColum= objButton.id;

		    $( "#divColumn"+idColum+"" ).remove();

		    let newTotalColumns = $("#totalColumns").html();
			newTotalColumns = parseInt(newTotalColumns) -1;
			$("#totalColumns").html(newTotalColumns);
	},
	BackToTable:function(){
		$("#codeGenerator").slideUp("slow");
		$("#tableSection").slideDown("slow");
		$("#routes_string_output,#controller_string_output, #model_string_output, #request_string_output").val("");
		$("#createView_string_output,#indexView_string_output, #showView_string_output, #editView_string_output").val("");
	},
	SavingNewJsonFile:function(){

		

		var formData = $("#saveForm").serialize();
		$.ajax({
		  data:  formData, //data to be send
		  type: "POST",
		  url: "save-json.php",
		  
		  success: function(data){
		  	// alert("foi");
		  	$("#codeGenerator").slideDown("slow");
		  	$("#tableSection").slideUp("slow");

		    console.log(data);
		  },
		  error: function(data){
		    // console.log("Fail...");
		  }
		  
		});

	},
	GetingIdOnHover:function(){
		$("*").mouseover(function(){
			$(this).attr('title',$(this).attr('id'));
		});
		$("*").on("click",function(){
			// console.log(Globals.tableName);
		});

	}
};
var Message = {
	ShowMessage:function(dataTitle, dataMessage,dataClass){
		$("#modal-title").html(dataTitle);
		$("#modal-body").html(dataMessage);
		$("#modal-header").addClass(dataClass);
		$("#messageModal").modal("show");
	}
};
var Routes = {
	/*----------  Subsection comment block  ----------*/
	
	GenerateRoutesString:function(){

		let tableName = $("#tableName").val();
		let tableSingular = $("#tableSingular").val();
		let tablePlural = $("#tablePlural").val();

		let routes = "/*---------- BLOCK "+tableName+" CRUD----------*/\n";
		routes += "Route::get('/crud/"+tableSingular+"', ['uses' => '"+tableName+"Controller@index', 'as' => 'cruds."+tableSingular+".index']);\n";
		routes += "Route::get('/crud/"+tableSingular+"/show/{id}', ['uses' => '"+tableName+"Controller@show', 'as' => 'cruds."+tableSingular+".show']);\n";
		routes += "Route::get('/crud/"+tableSingular+"/create', ['uses' => '"+tableName+"Controller@create', 'as' => 'cruds."+tableSingular+".create']);\n";
		routes += "Route::post('/crud/"+tableSingular+"/store', ['uses' => '"+tableName+"Controller@store', 'as' => 'cruds."+tableSingular+".store']);\n";
		routes += "Route::get('/crud/"+tableSingular+"/edit/{id}', ['uses' => '"+tableName+"Controller@edit', 'as' => 'cruds."+tableSingular+".edit']);\n";
		routes += "Route::put('/crud/"+tableSingular+"/update/{id}', ['uses' => '"+tableName+"Controller@update', 'as' => 'cruds."+tableSingular+".update']);\n";
		routes += "Route::get('/crud/"+tableSingular+"/destroy/{id}', ['uses' => '"+tableName+"Controller@destroy', 'as' => 'cruds."+tableSingular+".destroy']);\n";
		routes += "/*---------- BLOCK "+tableName+" CRUD----------*/\n";

		$("#routes_string_output").html(routes);

	},
	GenerateRoutesFile:function(){
		
		var formData = $("#saveRoutesfile").serialize();
		$.ajax({
          dataType: "json", // data to receive
		  data:  formData, // data to be send
		  type: "POST",
		  url: "save-json.php",
		  
		  success: function(data){
		  	Message.ShowMessage(data.title,data.message,data.class);
		  },
		  error: function(data){
		  	// alert(data);
		  	Message.ShowMessage("Erro","Javascript ","bg-danger");
		  }
		  
		});

	},
};
var Controller = {
	GenerateControllerString:function(){
		let col_id = "id";
		let tableName = $("#tableName").val();
		let tableSingular = $("#tableSingular").val();
		let tablePlural = $("#tablePlural").val();
		let totalColumns = $("#totalColumns").html();
		let controllerPath = $("#controller_path_label").html().replace(/[/]/g,"\\");

		// alert($("#model_path_label").html());

		let controllerOutputPhp = "";
		// controllerOutputPhp += "§"; 
		// controllerOutputPhp += "<\?php \n§namespace App\\Http\\Controllers; \n§use Illuminate\\Http\\Request;\n§use App\\Http\\Requests;  "; 
		controllerOutputPhp += "<\?php \n§namespace "+controllerPath+"; \n§use Illuminate\\Http\\Request;\n§use App\\Http\\Requests;  "; 
		controllerOutputPhp += "\r\n§\n§class "+tableName+"Controller extends Controller\n§{";
		
		//index
		controllerOutputPhp += "\n§\t/** \n§\t * Display a listing of the resource. \n§\t * \n§\t * @return \\Illuminate\\Http\\Response \n §\t */ \n§\tpublic function index() \n§\t{";
		controllerOutputPhp += "\n§\t\t$"+tablePlural+" = \\App\\Models\\"+tableName+"::all();";
		controllerOutputPhp += "\n§\t\treturn view('cruds."+tableSingular+".index', compact('"+tablePlural+"'));"; 
		controllerOutputPhp += "\n§\t}";
		
		//create
		controllerOutputPhp += "\n §\n §\t/** \n §\t * Show the form for creating a new resource. \n §\t * \n §\t * @return \\Illuminate\\Http\\Response\n §\t */\n §\tpublic function create()\n §\t {";
		controllerOutputPhp += "\n §\t\tif(999==999){ // input your acl or condition";
		controllerOutputPhp += "\n §\t\t\t//return redirect()->route('cruds."+tablePlural+".create');";
		controllerOutputPhp += "\n §\t\t\treturn view('cruds."+tableSingular+".create');";
		controllerOutputPhp += "\n §\t\t}else{\n §\t\t\treturn redirect()->route('cruds."+tablePlural+".index');\n §\t\t}";
		controllerOutputPhp += "\n §\t}";

		//store
		controllerOutputPhp += "\n §\n §\t/** \n §\t * Store a newly created resource in storage. \n §\t * \n §\t * @param  \\Illuminate\\Http\\Request  $request \n §\t * @return \\Illuminate\\Http\\Response\n §\t */\n §\tpublic function store(\\App\\Http\\Requests\\"+tableName+"Request $request)\n §\t{//Request $request";
		controllerOutputPhp += "\n §\t\tif(999==999){ // input your acl or condition";
		controllerOutputPhp += "\n §\t\t\t\\App\\Models\\"+tableName+"::create($request->all());";
		controllerOutputPhp += "\n §\t\t\t\//$last_id = \\App\\"+tableName+"::limit(1)->orderBy('"+tableSingular+"_id','desc')->value('"+tableSingular+"_id');";
		controllerOutputPhp += "\n §\t\t\t//$"+tableSingular+" = \\App\\"+tableName+"::create(['model_column'=>$request->input('input_html'),'model_column2'=>$request->input('input_html2'),]);";
		controllerOutputPhp += "\n §\t\t\t//$"+tableSingular+" = new "+tableName+"; $"+tableSingular+"->name = $request->input('input_html'); $"+tableSingular+"->save(); //insertedId = $"+tableSingular+"->id;";
		controllerOutputPhp += "\n §\t\t\t\\Session::flash('flash_message',[\n §\t\t\t\t'msg'=>\""+tableName+" successfully stored!\", \n §\t\t\t\t'class'=>\"alert-success\"\n §\t\t\t]);";
		controllerOutputPhp += "\n §\t\t\treturn redirect()->route('cruds."+tableSingular+".index');";
		controllerOutputPhp += "\n §\t\t}else{\n §\t\t\treturn redirect()->route('cruds."+tableSingular+".index');\n §\t\t}";
		controllerOutputPhp += "\n §\t}";

		//show
		controllerOutputPhp += "\n §\n §\t/** \n §\t * Display the specified resource. \n §\t * \n §\t * @param  int  $id \n §\t * @return \\Illuminate\\Http\\Response\n §\t */\n §\tpublic function show($id)\n §\t{";
		controllerOutputPhp += "\n §\t\tif(999==999){ // input your acl or condition";
		controllerOutputPhp += "\n §\t\t\t$"+tableSingular+" = \\App\\Models\\"+tableName+"::find($id);";
		controllerOutputPhp += "\n §\t\t\t// get previous user id";
		controllerOutputPhp += "\n §\t\t\t$previous = \\App\\Models\\"+tableName+"::where('"+col_id+"', '<', $"+tableSingular+"->"+col_id+")->max('"+col_id+"');";
		controllerOutputPhp += "\n §\t\t\tif($previous==null){";
		controllerOutputPhp += "\n §\t\t\t\t$previous = \\App\\Models\\"+tableName+"::orderBy('"+col_id+"','desc')->value('"+col_id+"');";
		controllerOutputPhp += "\n §\t\t\t}";
		controllerOutputPhp += "\n §\t\t\t// get next user id";
		controllerOutputPhp += "\n §\t\t\t$next = \\App\\Models\\"+tableName+"::where('"+col_id+"', '>', $"+tableSingular+"->"+col_id+")->min('"+col_id+"');";
		controllerOutputPhp += "\n §\t\t\tif($next==0){";
		controllerOutputPhp += "\n §\t\t\t\t$next = \\App\\Models\\"+tableName+"::orderBy('"+col_id+"','asc')->value('"+col_id+"');";
		controllerOutputPhp += "\n §\t\t\t}";
		//controllerOutputPhp += "\n §\t\t\t//return redirect()->route('cruds."+tableSingular+".show', compact('"+tableSingular+"','previous','next'));";
		controllerOutputPhp += "\n §\t\t\treturn view('cruds."+tableSingular+".show', compact('"+tableSingular+"','previous','next','id'));";
		controllerOutputPhp += "\n §\t\t}else{\n §\t\t\treturn redirect()->route('cruds."+tableSingular+".index');\n §\t\t}";
		controllerOutputPhp += "\n §\t}";
		
		//edit
		controllerOutputPhp += "\n §\n §\t/** \n §\t * Show the form for editing the specified resource. \n §\t * \n §\t * @param  int  $id \n §\t * @return \\Illuminate\\Http\\Response\n §\t */\n §\tpublic function edit($id)\n §\t{\n §\t";
		controllerOutputPhp += "\n §\t\tif(999==999){ // input your acl or condition";
		controllerOutputPhp += "\n §\t\t\t$"+tableSingular+" = \\App\\Models\\"+tableName+"::find($id);";
		controllerOutputPhp += "\n §\t\t\treturn view('cruds."+tableSingular+".edit', compact('"+tableSingular+"'));";
		controllerOutputPhp += "\n §\t\t}else{\n §\t\t\treturn redirect()->route('cruds."+tableSingular+".index');\n §\t\t}";
		controllerOutputPhp += "\n §\t}";
		
		//update
		controllerOutputPhp += "\n §\n §\t/** \n §\t * Update the specified resource in storage. \n §\t *\n §\t * @param  \\Illuminate\\Http\\Request  $request \n §\t * @param  int  $id \n §\t * @return \\Illuminate\\Http\\Response\n §\t */\n §\tpublic function update(\\App\\Http\\Requests\\"+tableName+"Request $request, $id)\n §\t{//Request $request";
		controllerOutputPhp += "\n §\t\tif(999==999){ // input your acl or condition";
		controllerOutputPhp += "\n §\t\t\t\\App\\Models\\"+tableName+"::find($id)->update($request->all());";
		controllerOutputPhp += "\n §\t\t\t$"+tableSingular+" = \\App\\Models\\"+tableName+"::find($id);// $"+tableSingular+"->name=Input::get('name');"+tableSingular+"->save()//$request->input('input_html')"; 
		controllerOutputPhp += "\n §\t\t\t\\Session::flash('flash_message',[\n §\t\t\t\t'msg'=>\""+tableName+" successfully updated!\", \n §\t\t\t\t'class'=>\"alert-success\"\n §\t\t\t]);";
		controllerOutputPhp += "\n §\t\t\treturn redirect()->route('cruds."+tableSingular+".index');";
		controllerOutputPhp += "\n §\t\t}else{\n §\t\t\treturn redirect()->route('cruds."+tableSingular+".index');\n §\t\t}";
		controllerOutputPhp += "\n §\t}";

		//destroy
		controllerOutputPhp += "\n §\n §\t/** \n §\t * Remove the specified resource from storage. \n §\t *\n §\t * @param  int  $id \n §\t * @return \\Illuminate\\Http\\Response\n §\t */\n §\tpublic function destroy($id)\n §\t{";
		controllerOutputPhp += "\n §\t\tif(999==999){ // input your acl or condition";
		controllerOutputPhp += "\n §\t\t\t$"+tableSingular+" = \\App\\Models\\"+tableName+"::find($id);";
		controllerOutputPhp += "\n §\t\t\t$"+tableSingular+"->delete();";
		controllerOutputPhp += "\n §\t\t\t\Session::flash('flash_message',['\n §\t\t\t\tmsg'=>\""+tableName+" successfully removed!\", \n §\t\t\t\t'class'=>\"alert-success\"\n §\t\t\t]);";
		controllerOutputPhp += "\n §\t\t\treturn redirect()->route('cruds."+tableSingular+".index');";
		controllerOutputPhp += "\n §\t\t}else{\n §\t\t\treturn redirect()->route('cruds."+tableSingular+".index');\n §\t\t}";
		controllerOutputPhp += "\n §\t}";

		//finalclass
		controllerOutputPhp += "\n §\n §}";

		controllerOutuputJs = controllerOutputPhp.replace(/[§]/g, "");
		
		$("#controller_string_output").val(controllerOutuputJs);

	},
	GenerateItemFile:function(){
		console.log("GenerateItemFile");
		// var currentForm = $(this).closest("form").attr('id');
		var currentForm = $(this).closest("form"); // find the closest item in this form // gets the form ids
		var textArea = $('form').find('*').filter(':input:visible:first'); // find the closest item in this form // gets the textarea ids
		if (textArea.val()=="") {
			alert("Você precisa primeiro gerar o script");
		}else{
			// alert("agora sim");
			console.log(currentForm.attr("id"));
			// var formData = $("#saveControllerFile").serialize();
			var formData = currentForm.serialize();
			// alert("foi");
			$.ajax({
			  data:  formData, //data to be send
			  type: "POST",
			  url: "save-json.php",
			  success: function(data){
			  	// $("#codeGenerator").slideDown("slow");
			  	// $("#tableSection").slideUp("slow");
			    console.log("Done...");
			    console.log(data);
			  },
			  error: function(data){
			    console.log("Fail...");
			    console.log(data);
			  }
			});

		}


	}


};
var Model = {
	GenerateModelString:function(){
		let tableName = $("#tableName").val();
		let tableSingular = $("#tableSingular").val();
		let tablePlural = $("#tablePlural").val();
		let totalColumns = $("#totalColumns").html();
		let modelPath = $("#model_path_label").html().replace(/[/]/g,"\\");

		let html_name = "";
		let modelOutputPhp = "";

	    modelOutputPhp +="";

	    modelOutputPhp+="<\?php";
	    modelOutputPhp+=" \n § ";
	    // modelOutputPhp+=" \n §namespace App\\Models;";
	    modelOutputPhp+=" \n §namespace "+modelPath+";";
	    modelOutputPhp+=" \n § ";
	    modelOutputPhp+=" \n § use Illuminate\\Database\\Eloquent\\Model;";
	    modelOutputPhp+=" \n § ";
	    modelOutputPhp+=" \n § class "+tableName+" extends Model";
	    modelOutputPhp+=" \n § {";
	    modelOutputPhp+=" \n § \t\t//protected $table = 'furys';//table name";
	    modelOutputPhp+=" \n § \t\t//protected $primaryKey = 'pdt_id';//table pk";
	    modelOutputPhp+=" \n § \t\tprotected $fillable = [";
	    modelOutputPhp+=" \n § \t\t\t";

	    for (var i = 0; i < totalColumns; i++) {
    		html_name = $("#html_name"+[i]).val();
	    		if(html_name != null){
		        	modelOutputPhp +="'"+html_name+"', ";
	    		}else{
	    			totalColumns++ ;
	    		}
	    }

	    modelOutputPhp+=" \n § \t\t];";
	    
	    modelOutputPhp+=" \n § ";
	    modelOutputPhp+=" \n § \t\t//public function hasManyFunction(){";
	    modelOutputPhp+=" \n § \t\t//  return $this->hasMany('HasManyFromThis-App\\OtherModelName','OtherTableId-column_table','thisTableRelationId-id');";
	    modelOutputPhp+=" \n § \t\t//}";
	    modelOutputPhp+=" \n §";
	    modelOutputPhp+=" \n § \t\t//public function belongsToThisModelItem(){";
	    modelOutputPhp+=" \n § \t\t//return $this->belongsToMany('belongsToThis-App\\OtherModelName');";
	    modelOutputPhp+=" \n § \t\t//}";
	    modelOutputPhp+=" \n §";
	    modelOutputPhp+=" \n § \t\t//public function hasOne/singularName(){";
	    modelOutputPhp+=" \n § \t\t//return $this->hasOne('HasOneOfThis-App\\OtherModelName','OtherTableId-column_table','thisTableRelationId-id')";
	    modelOutputPhp+=" \n § \t\t//}";

	    modelOutputPhp+=" \n § }";

	    var modelOutputJs = modelOutputPhp.replace(/[§]/g, "");

		$("#model_string_output").val(modelOutputJs);
	}
};
var Request = {
	GenerateRequestString(){
	    let tableName = $("#tableName").val();
	    let totalColumns = $("#totalColumns").html();
		let requestPath = $("#request_path_label").html().replace(/[/]/g,"\\");


	    let requestStringPhp = "";

	    requestStringPhp+="<\?php";
	    requestStringPhp+=" \n § ";
	    // requestStringPhp+=" \n § namespace App\\Http\\Requests;";
	    requestStringPhp+=" \n § namespace "+requestPath+";";
	    requestStringPhp+=" \n § ";
	    requestStringPhp+=" \n § use Illuminate\\Foundation\\Http\\FormRequest;";
	    requestStringPhp+=" \n § ";
	    requestStringPhp+=" \n § class "+tableName+"Request extends FormRequest";
	    requestStringPhp+=" \n § {";

	    requestStringPhp+=" \n § \t\t/**";
	    requestStringPhp+=" \n § \t\t * Determine if the user is authorized to make this request.";
	    requestStringPhp+=" \n § \t\t *";
	    requestStringPhp+=" \n § \t\t * @return bool";
	    requestStringPhp+=" \n § \t\t */";
	    requestStringPhp+=" \n § \t\tpublic function authorize()";
	    requestStringPhp+=" \n § \t\t{";
	    requestStringPhp+=" \n § \t\t\treturn true;";
	    requestStringPhp+=" \n § \t\t}";
	    requestStringPhp+=" \n §";
	    requestStringPhp+=" \n § \t\t/**";
	    requestStringPhp+=" \n § \t\t * Get the validation rules that apply to the request.";
	    requestStringPhp+=" \n § \t\t *";
	    requestStringPhp+=" \n § \t\t * @return array";
	    requestStringPhp+=" \n § \t\t */";
	    requestStringPhp+=" \n § \t\t";
	    requestStringPhp+=" \n § \t\tpublic function rules()";
	    requestStringPhp+=" \n § \t\t{";
	    requestStringPhp+=" \n § \t\t\treturn [";

	    for (var i = 0; i < totalColumns; i++) {
    		html_name = $("#html_name"+[i]).val();
	    		if(html_name != null){
		        	// modelOutputPhp +="'"+html_name+"', ";
		        	requestStringPhp +="\n § \t\t\t\t'"+html_name+"'=>'required|max:20',";
	    		}else{
	    			totalColumns++ ;
	    		}
	    }

	    requestStringPhp+=" \n § \t\t\t];";
	    requestStringPhp+=" \n § \t\t}";

        requestStringPhp+=" \n § \t\tpublic function messages()";
        requestStringPhp+=" \n § \t\t{";
        requestStringPhp+=" \n § \t\t\treturn [";

    	    for (var i = 0; i < totalColumns; i++) {
        		html_name = $("#html_name"+[i]).val();
    	    		if(html_name != null){
    		        	// modelOutputPhp +="'"+html_name+"', ";
    		        	// requestStringPhp +="\n | \t\t\t\t'"+html_name+"'=>'required|max:20',";
		    	        requestStringPhp +="\n § \t\t\t\t'"+html_name+".required'=>'Field required',";

    	    		}else{
    	    			totalColumns++ ;
    	    		}
    	    }


        requestStringPhp+=" \n § \t\t\t];";
        requestStringPhp+=" \n § \t\t}";
        
	    requestStringPhp+="\n § //rules options: max:number|min:number|email|unique:posts|bail|nullable|date";

	    requestStringPhp+=" \n § }";

	   	var requestStringJs = requestStringPhp.replace(/[§]/g, ""); 

	    $("#request_string_output").val(requestStringJs);    
	}
};

var Views = {
	GenerateCreateView:function(){
			    
	    let tableSingular = $("#tableSingular").val();
	    let tablePlural = $("#tablePlural").val();
	    let totalColumns = $("#totalColumns").html();

	    let createViewStringPhp = "";

	    createViewStringPhp += "@\extends('layouts.app') \n |";
	    createViewStringPhp += "@\section('title','Create') \n |";
	    createViewStringPhp += "@\section('content') \n | ";

	    
	    createViewStringPhp +="\n §<div class='container'>";
	    createViewStringPhp +="\n §<div class='row'>";
	    createViewStringPhp +="\n §<div class='col-md-10 col-md-offset-1'>";
	    createViewStringPhp +="\n §<div class='panel panel-default'>";
	    createViewStringPhp +="\n §<div class='panel-body'>";
	    createViewStringPhp +="\n §<div class='col-md-12'>";

	    createViewStringPhp +="\n §<form id='saveForm' class='form-horizontal' role='form' method='POST' action='{\{route(\"cruds."+tableSingular+".store\")}}' enctype='multipart/form-data'>";
	    createViewStringPhp +="\n §{\{ csrf_field() }\}";


	    for (var i = 0; i < totalColumns; i++) {
	    	

	    	let display_name = $("#display_name"+i).val();
	    	alert(display_name);
	    	let html_name = $("#html_name"+i).val();
	    	let html_type = $("#html_type"+i).val();
	    	let migration_type = $("#migration_type"+i).val();
	    	let nullable = $("#nullable"+i).val();
	    	let create_view_visibility = $("#create_view_visibility"+i).is(":checked");
	    	let defaults = $("#default"+i).val();

	    	console.log("\n\n\nlooping "+i+" : \n"+createViewStringPhp);
	    	console.log("display_name "+i+" : \n"+display_name);
    	
	    	
		    	if (create_view_visibility) {
		    		console.log("if 2");
		            createViewStringPhp +="\n §<!-- --------------------------------"+display_name+"-------------------------------- -->\n §";
		            createViewStringPhp +="<div class='form-group{\{ $errors->has(\""+html_name+"\") ? \" has-error\" : \"\" }}'>";
		            createViewStringPhp +="\n §\t";
		            createViewStringPhp +="<label for='"+html_name+"' class='col-md-4 control-label'>"+display_name+"</label>";
		            createViewStringPhp +="\n §\t";
		            createViewStringPhp +="<div class='col-md-6'>";
		            createViewStringPhp +="\n §\t\t";
		            createViewStringPhp +="<input id='"+html_name+"' type='"+html_type+"' class='form-control' name='"+html_name+"' placeholder='"+html_type+"/"+migration_type+"'>";
		            createViewStringPhp +="\n §\t\t";
		            createViewStringPhp +="@\if ($errors->has(\""+html_name+"\"))";
		            createViewStringPhp +="\n §\t\t\t";
		            createViewStringPhp +="<span class='help-block'>\n §\t\t\t\t <strong>{\{ $errors->first(\""+html_name+"\") }}</strong>\n §\t\t\t </span>";
		            createViewStringPhp +="\n §\t\t";
		            createViewStringPhp +="@\endif \n §\t</div>\n §</div>";
		            createViewStringPhp +="\n §<!-- --------------------------------/"+display_name+"-------------------------------- -->\n §";
	            }
	    }

	    createViewStringPhp +="\n §<div class='form-group'>";
	    createViewStringPhp +="\n §<label for='' class='col-md-4 control-label'></label>";
	    createViewStringPhp +="\n §<div class='col-md-6'>";
	    createViewStringPhp +="\n §<button class='btn btn-info'>Adicionar</button>";
	    createViewStringPhp +="\n §</div>";
	    createViewStringPhp +="\n §</div>";

	    createViewStringPhp +="\n §</form>";
	    createViewStringJs = createViewStringPhp.replace(/[§]/g,"");

	    $("#createView_string_output").val(createViewStringJs);
	},
	GenerateIndexView:function(){
		let col_id = "id";
		let tableName = $("#tableName").val();
		let tableSingular = $("#tableSingular").val();
		let tablePlural = $("#tablePlural").val();
		let totalColumns = $("#totalColumns").html();

		indexViewStringPhp = "";



		//horizontal
		indexViewStringPhp += "\n §<!-- horizontal -->\n § \n §";
		indexViewStringPhp += "<div class='container'>\n § \t <div class='row'> \n § \t\t<div class='col-xs-12'>\n §";
		indexViewStringPhp += "\n §\t\t<h1>All<small>(horizontal) <a href='{\{route(\"cruds."+tableSingular+".create\")}}'><span class='glyphicon glyphicon-plus pull-right'></span></small></a></h1> \n §";
		indexViewStringPhp +="\t\t\t<div id='masterDiv'>\n §";
		indexViewStringPhp += "\t\t\t@"+"foreach";
		indexViewStringPhp += "($" + tablePlural + " as $" + tableSingular + ")\n §";
		indexViewStringPhp +="\t\t\t<div class='rowDiv'>\n §";
		    for (var i = 0; i < totalColumns; i++) {

		    	let display_name = $("#display_name"+i).val();
		    	let html_name = $("#html_name"+i).val();
		    	let html_type = $("#html_type"+i).val();
		    	let migration_type = $("#migration_type"+i).val();
		    	let nullable = $("#nullable"+i).val();
		    	let index_view_visibility = $("#index_view_visibility"+i).is(":checked");
		    	let defaults = $("#default"+i).val();



				if (index_view_visibility) {
		        	indexViewStringPhp +="\t\t\t<div class='insideDiv'> <h6>{\{$"+tableSingular+"->" +html_name + "}}</h6></div>\n §";
		    	}
		    }
		    indexViewStringPhp +="\t\t\t<div class='insideDiv text-right'>\n § \t\t\t<a href='{\{route('cruds."+tableSingular+".show',$"+tableSingular+"->"+col_id+")}}' class='btn btn-info'><span class='glyphicon glyphicon-eye-open'></span></a>";
		    indexViewStringPhp +="\n § \t\t\t<a href='{\{route('cruds."+tableSingular+".edit',$"+tableSingular+"->"+col_id+")}}' class='btn btn-success'><span class='glyphicon glyphicon-edit'></span></a>";
		    indexViewStringPhp +="\n § \t\t\t<a href='#' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></a>";
		    indexViewStringPhp +="\n § \t\t\t</div>\n §";
		    
		indexViewStringPhp +="\t\t\t</div>\n §";
		indexViewStringPhp += "\t\t\t@\endforeach \n §";
		indexViewStringPhp +="\t\t\t</div>";
		indexViewStringPhp += "\n § \t\t</div> \n §\t</div> \n §</div> \n §";

		indexViewStringPhp += "<br><br><br>";

		//vertical
		indexViewStringPhp += "\n §<!-- vertical -->\n § \n §";
		indexViewStringPhp += "\n §<div class='container'> \n § \t<div class='row'> \n § \t\t<div class='col-xs-12'>";
		indexViewStringPhp += "\n §\t\t<h1>All<small>(vertical)<small></h1>\n §";
		indexViewStringPhp += "\n §\t\t\t@"+"foreach";
		indexViewStringPhp += "($" + tablePlural + " as $" + tableSingular + ")";
		    indexViewStringPhp += "\n §\t\t\t<div class='col-xs-3 card'>";
		        for (var i = 0; i < totalColumns; i++) {

		        	let display_name = $("#display_name"+i).val();
		        	let html_name = $("#html_name"+i).val();
		        	let html_type = $("#html_type"+i).val();
		        	let migration_type = $("#migration_type"+i).val();
		        	let nullable = $("#nullable"+i).val();
		        	let index_view_visibility = $("#index_view_visibility"+i).is(":checked");
		        	let defaults = $("#default"+i).val();

		        	if (index_view_visibility) {
		            	indexViewStringPhp += "\n §\t\t\t <h5> {\{$"+tableSingular+"->" +html_name + "}}</h5>";
		        	}
		        }
		    indexViewStringPhp +="\n §\t\t\t<div class='text-center'>";
		    indexViewStringPhp +="\n §\t\t\t<a href='{\{route('cruds."+tableSingular+".show',$"+tableSingular+"->"+col_id+")}}' class='btn btn-info'><span class='glyphicon glyphicon-eye-open'></span></a>";
		    indexViewStringPhp +="\n §\t\t\t<a href='{\{route('cruds."+tableSingular+".edit',$"+tableSingular+"->"+col_id+")}}' class='btn btn-success'><span class='glyphicon glyphicon-edit'></span></a>";
		    indexViewStringPhp +="\n §\t\t\t<a href='#' class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></a>";
		    indexViewStringPhp +="\n §\t\t\t</div> ";
		    indexViewStringPhp += "\n §\t\t\t<br>\n §</div>";
		indexViewStringPhp += "\n §\t\t\t@\endforeach \n §";
		indexViewStringPhp += "\t\t</div> \n § \t</div> \n §</div>";
		indexViewStringPhp += "\n §@"+"endsection";

		indexViewStringJs = indexViewStringPhp.replace(/[§]/g,"");


		$("#indexView_string_output").val(indexViewStringJs);
	},
	GenerateShowView:function(){
		    let tableSingular = $("#tableSingular").val();
		    let tablePlural = $("#tablePlural").val();
		    let totalColumns = $("#totalColumns").html();



		    let showViewStringPhp = "";
		    showViewStringPhp +="\n §<div class='container'>";
		    showViewStringPhp +="\n §<div class='row'>";
		    showViewStringPhp +="\n §<div class='col-md-10 col-md-offset-1'>";
		    showViewStringPhp +="\n §<div class='panel panel-default'>";
		    showViewStringPhp +="\n §<div class='panel-body'>";
		    showViewStringPhp +="\n §<div class='col-md-12'>";

		    for (var i = 0; i < totalColumns; i++) {

		    	let display_name = $("#display_name"+i).val();
		    	let html_name = $("#html_name"+i).val();
		    	let html_type = $("#html_type"+i).val();
		    	let migration_type = $("#migration_type"+i).val();
		    	let nullable = $("#nullable"+i).val();
		    	let show_view_visibility = $("#show_view_visibility"+i).is(":checked");
		    	let defaults = $("#default"+i).val();


		    	
		    	if (show_view_visibility) {
			        showViewStringPhp +="<!-- --------------------------------"+display_name+"-------------------------------- -->\n §";
			        showViewStringPhp +="<div class='form-group{\{ $errors->has(\""+html_name+"\") ? \" has-error\" : \"\" }}'>";
			        showViewStringPhp +="\n §\t";
			        showViewStringPhp +="<label for='"+html_name+"' class='col-md-4 control-label'>"+display_name+"</label>";
			        showViewStringPhp +="\n §\t";
			        showViewStringPhp +="<div class='col-md-6'>";
			        showViewStringPhp +="\n §\t\t";
			        showViewStringPhp +="<label id='"+html_name+"' type='"+html_type+"' class='form-control' name='"+html_name+"'>{\{$"+tableSingular+"->"+html_name+"}}<label>";
			        showViewStringPhp +="\n §\t\t";
			        showViewStringPhp +="@\if ($errors->has(\""+html_name+"\"))";
			        showViewStringPhp +="\n §\t\t\t";
			        showViewStringPhp +="<span class='help-block'>\n §\t\t\t\t <strong>{\{ $errors->first(\""+html_name+"\") }}</strong>\n §\t\t\t </span>";
			        showViewStringPhp +="\n §\t\t";
			        showViewStringPhp +="@\endif \n §\t</div>\n §</div>";
			        showViewStringPhp +="\n §<!-- --------------------------------/"+display_name+"-------------------------------- -->\n §";
		    	}else{
		    		showViewStringPhp+="";
		    	}
		    }

		    showViewStringPhp +="\n §<div class='form-group'>";
		    showViewStringPhp +="\n §<label for='' class='col-md-4 control-label'></label>";
		    showViewStringPhp +="\n §<div class='col-md-6'>";
		    showViewStringPhp +="\n §<a href='{\{route('cruds."+tableSingular+".index')}}' class='btn btn-info'>Voltar</a>";
		    showViewStringPhp +="\n §<br><br>";
		    showViewStringPhp +="\n §<a href='{\{route('cruds."+tableSingular+".show',$previous)}}' class='glyphicon glyphicon-chevron-left'></a>";
		    showViewStringPhp +="\n §<span class='badge'>{\{$id}}</span>";
		    showViewStringPhp +="\n §<a href='{\{route('cruds."+tableSingular+".show',$next)}}' class='glyphicon glyphicon-chevron-right'></a>";
		    showViewStringPhp +="\n §</div>";
		    showViewStringPhp +="\n §</div>";

		    showViewStringPhp +="\n §</div> ";
		    showViewStringPhp +="\n §</div> ";
		    showViewStringPhp +="\n §</div> ";
		    showViewStringPhp +="\n §</div> ";
		    showViewStringPhp +="\n §</div> ";
		    showViewStringPhp +="\n §</div> ";

		    showViewStringJs = showViewStringPhp.replace(/[§]/g,"");


		    $("#showView_string_output").val(showViewStringJs);    

	},
	GenerateEditView:function(){
		
		let tableSingular = $("#tableSingular").val();
		let tablePlural = $("#tablePlural").val();
		let totalColumns = $("#totalColumns").html();


	    var editViewStringPhp = "";

	    editViewStringPhp += "@\extends('layouts.app') \n §";
	    editViewStringPhp += "@\section('title','Show') \n §";
	    editViewStringPhp += "@\section('content') \n § ";

	    editViewStringPhp +="\n §<div class='container'>";
	    editViewStringPhp +="\n §<div class='row'>";
	    editViewStringPhp +="\n §<div class='col-md-10 col-md-offset-1'>";
	    editViewStringPhp +="\n §<div class='panel panel-default'>";
	    editViewStringPhp +="\n §<div class='panel-body'>";
	    editViewStringPhp +="\n §<div class='col-md-12'>";
	    editViewStringPhp +="\n §<form id='updateForm' class='form-horizontal' role='form' method='POST' action='{\{route(\'cruds.user.update\', "+"$"+tableSingular+"->id)}}' enctype='multipart/form-data'>";
	    editViewStringPhp +="\n §<input type='hidden' name='_method' value='put'>";
	    editViewStringPhp +="\n §{\{ csrf_field() }\}";



	    for (var i = 0; i < totalColumns; i++) {

	    	let display_name = $("#display_name"+i).val();
	    	let html_name = $("#html_name"+i).val();
	    	let html_type = $("#html_type"+i).val();
	    	let migration_type = $("#migration_type"+i).val();
	    	let nullable = $("#nullable"+i).val();
	    	let edit_view_visibility = $("#edit_view_visibility"+i).is(":checked");
	    	let defaults = $("#default"+i).val();

	    	
	    	if (edit_view_visibility) {
		        editViewStringPhp +="<!-- --------------------------------"+html_name+"-------------------------------- -->\n §";
		        editViewStringPhp +="<div class='form-group{\{ $errors->has(\""+html_name+"\") ? \" has-error\" : \"\" }}'>";
		        editViewStringPhp +="\n §\t";
		        editViewStringPhp +="<label for='"+html_name+"' class='col-md-4 control-label'>"+display_name+"</label>";
		        editViewStringPhp +="\n §\t";
		        editViewStringPhp +="<div class='col-md-6'>";
		        editViewStringPhp +="\n §\t\t";
		        editViewStringPhp +="<label id='"+html_name+"' type='"+html_type+"' class='form-control' name='"+html_name+"'>{\{$"+tableSingular+"->"+html_name+"}}<label>";
		        editViewStringPhp +="\n §\t\t";
		        editViewStringPhp +="@\if ($errors->has(\""+html_name+"\"))";
		        editViewStringPhp +="\n §\t\t\t";
		        editViewStringPhp +="<span class='help-block'>\n §\t\t\t\t <strong>{\{ $errors->first(\""+html_name+"\") }}</strong>\n §\t\t\t </span>";
		        editViewStringPhp +="\n §\t\t";
		        editViewStringPhp +="@\endif \n §\t</div>\n §</div>";
		        editViewStringPhp +="\n §<!-- --------------------------------/"+html_name+"-------------------------------- -->\n §";
	    	}
	    }

	    editViewStringPhp +="\n §<div class='form-group'>";
	    editViewStringPhp +="\n §<label for='' class='col-md-4 control-label'></label>";
	    editViewStringPhp +="\n §<div class='col-md-6'>";
	    editViewStringPhp +="\n §<a href='{\{route('cruds."+tableSingular+".index')}}' class='btn btn-info'>Voltar</a>";
	    editViewStringPhp +="\n §<br><br>";
	    editViewStringPhp +="\n §<a href='{\{route('cruds."+tableSingular+".show',$previous)}}' class='glyphicon glyphicon-chevron-left'></a>";
	    editViewStringPhp +="\n §<span class='badge'>{\{$id}}</span>";
	    editViewStringPhp +="\n §<a href='{\{route('cruds."+tableSingular+".show',$next)}}' class='glyphicon glyphicon-chevron-right'></a>";
	    editViewStringPhp +="\n §</div>";
	    editViewStringPhp +="\n §</div>";

	    //editViewStringPhp +="\n §</form>";

	    editViewStringPhp +="\n §</div> ";
	    editViewStringPhp +="\n §</div> ";
	    editViewStringPhp +="\n §</div> ";
	    editViewStringPhp +="\n §</div> ";
	    editViewStringPhp +="\n §</div> ";
	    editViewStringPhp +="\n §</div> ";


	    editViewStringPhp +="\n §@"+"endsection";


	    editViewStringJs = editViewStringPhp.replace(/[§]/g,"");
	    console.log(editViewStringJs);


	    $("#editView_string_output").val(editViewStringJs);    




	}
};


