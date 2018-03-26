$(document).ready(function(){
		$(".se-pre-con").fadeOut(1000);;

	/*----------  Index  ----------*/
	Index.HidingElements();
	Index.GettingJsonTableData();
	Index.SetingSelects();
	Index.SetingCheckboxes();
	Index.CreatingNewJsonFile();
	// Index.GetingIdOnHover();
	$("#updateJsonTable").click(Index.UpdatingAndSavingCode);
	$("#addNewCOlumn").click(Index.AddNewColumn);
	$(".deleteColumn").on('click', "deleteColumn",Index.DeleteColumn);
	$("#backToTable").click(Index.BackToTable);

	/*----------  Routes  ----------*/
	$("#generateRoutes").click(Routes.GenerateRoutesString);

	/*----------  Controller  ----------*/
	$("#generateController").click(Controller.GenerateControllerString);

	/*----------  Model  ----------*/
	$("#generateModel").click(Model.GenerateModelString);

	/*----------  Request  ----------*/
	$("#generateRequest").click(Request.GenerateRequestString);
	
	/*----------  Views  ----------*/
	$("#generateCreateView").click(Views.GenerateCreateView);
	$("#generateShowView").click(Views.GenerateShowView);





	$("#currentTableStatic").html(Globals.TableName);


	$("#currentTable").on("change", function(){
			Globals.TableName = "../tables/"+ $("#currentTable").val();
			$("#currentTableStatic").html(Globals.TableName);			
			Index.GettingJsonTableData();
			Index.SetingSelects();
			Index.SetingCheckboxes();
	});





});

var Globals = {
	// TableName :"table1.json",
	TableName :"../tables/"+ $("#currentTable").val(),
	// tableName2 :"table2.json",
	// TotalColumns : $("#totalColumnsInput").val(),

};


var Index ={
	HidingElements:function(){
		$("#jsonTableOutPut").hide();
		$("#tutorialJson").hide();
		$("#lastId").hide();
		$("#lastIdSpan").hide();
		$("#codeGenerator").hide();
	},
	GettingJsonTableData:function(){

			let currentTable = Globals.TableName;
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
										    "<option value='number'>number</option>" +
										    "<option value='image'>image</option>" +
										    "<option value='email'>email</option>" +
										    "<option value='password'>password</option>" +
									    "</select></div>";
			    fieldsList += "<div class='col-custom'><select id='migration_type" + [i] + "' name='migration_type" + [i] + "' class='form-control-sm'>" +
									        "<option value='varchar'>varchar</option>" +
									        "<option value='integer'>integer</option>" +
									        "<option value='date'>date</option>" +
									        "<option value='image'>image</option>" +
									        "<option value='boolean'>boolean</option>" +
									        "<option value='checkbox'>checkbox</option>" +
								        "</select></div>";
		        fieldsList += "<div class='col-custom-sm'><input type='checkbox' id='nullable" + [i] + "' name='nullable" + [i] + "' value='" + myObj.fields[i].nullable + "'  class='form-control-sm' /> </div>";
		        fieldsList += "<div class='col-custom'>"+
		        	"<input title='Create | Index | Show | Edit' type='checkbox' id='create_view_visibility"+[i]+"' name='create_view_visibility" + myObj.fields[i].create_view_visibility + "' class='form-control-sm' />"+
		        	"<input type='checkbox' id='index_view_visibility"+[i]+"' name='index_view_visibility" + myObj.fields[i].index_view_visibility + "' class='form-control-sm ' />"+
		        	"<input type='checkbox' id='show_view_visibility"+[i]+"' name='show_view_visibility" + myObj.fields[i].show_view_visibility + "' class='form-control-sm' />"+
		        	"<input type='checkbox' id='edit_view_visibility"+[i]+"' name='edit_view_visibility" + myObj.fields[i].edit_view_visibility + "' class='form-control-sm' />"+
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
			$("#totalColumns").html(totalColumns);
			$("#totalColumnsInput").val(totalColumns);
			// console.log(fieldsList);
			$("#fields").html(fieldsList);
			$("#tableName").val(myObj.table_name);
			$("#tableSingular").val(myObj.singular);
			$("#tablePlural").val(myObj.plural);
			$("#lastId").html(lastId);
		});
	},
	SetingSelects:function(){

		let currentTable = Globals.TableName;

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
	},SetingCheckboxes:function(){
		let currentTable = Globals.TableName;

		$.getJSON( currentTable, function( myObj ) {
			for (i = 0; i < myObj.fields.length; i++) {
				$("#create_view_visibility"+i).val(myObj.fields[i].create_view_visibility);
				myObj.fields[i].create_view_visibility == "true"?$("#create_view_visibility"+i).prop('checked', true):$("#create_view_visibility"+i).prop('checked', false);
				myObj.fields[i].index_view_visibility == "true"?$("#index_view_visibility"+i).prop('checked', true):$("#index_view_visibility"+i).prop('checked', false);
				myObj.fields[i].show_view_visibility == "true"?$("#show_view_visibility"+i).prop('checked', true):$("#show_view_visibility"+i).prop('checked', false);
				myObj.fields[i].edit_view_visibility == "true"?$("#edit_view_visibility"+i).prop('checked', true):$("#edit_view_visibility"+i).prop('checked', false);
				myObj.fields[i].nullable == "true"?$("#nullable"+i).prop('checked', true):$("#nullable"+i).prop('checked', false);
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
		alert(current_table_path);
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

			console.log(newJsonFile);
			$("#jsonTableOutPut").val(newJsonFile);
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

	    newColumnHtml += "<div class='columnDiv row' id='divColumn"+newColumnId+"'>";
	    newColumnHtml += "<div class='col-sm'><input type='text' id='display_name" + newColumnId + "' name='display_name" + newColumnId + "' value='"+newColumnId+"' class='totalColumns form-control-sm' /> </div>";
	    // newColumnHtml += "Display name: <input type='text' id='display_name" + newColumnId + "' name='display_name" + newColumnId + "' value='' class='totalColumns' /> &nbsp";
	    newColumnHtml += "<div class='col-sm'><input type='text' id='html_name" + newColumnId + "' name='html_name" + newColumnId + "' value='' class='totalColumns form-control-sm' /> </div>";
	    newColumnHtml += "<div class='col-sm'><select id='html_type" + newColumnId + "' name='html_type" + newColumnId + "'  class='totalColumns form-control-sm'>"+
								    "<option value='text'>text</option>" +
								    "<option value='checkbox'>checkbox</option>" +
								    "<option value='number'>number</option>" +
								    "<option value='image'>image</option>" +
								    "<option value='email'>email</option>" +
								    "<option value='password'>password</option>" +
							    "</select> </div>";
	    newColumnHtml += "<div class='col-sm'><select id='migration_type" + newColumnId + "' name='migration_type" + newColumnId + "' class='form-control-sm'> " +
							        "<option value='varchar'>varchar</option>" +
							        "<option value='integer'>integer</option>" +
							        "<option value='date'>date</option>" +
							        "<option value='image'>image</option>" +
							        "<option value='boolean'>boolean</option>" +
							        "<option value='checkbox'>checkbox</option>" +
						        "</select> </div>";
        newColumnHtml += "<div class='col-sm'><input type='text' id='nullable" + newColumnId + "' name='nullable" + newColumnId + "' value=''  class='form-control-sm' /> </div> ";
        newColumnHtml += "<div class='col-sm'><input type='text' id='default" + newColumnId + "' name='default" + newColumnId + "' value='' class='form-control-sm' /> </div>";
        newColumnHtml += "<div class='col-sm'><button type='button' id='"+newColumnId+"' name='DeleteColumn"+newColumnId+"' class='deleteColumn btn btn-danger' onclick='Index.DeleteColumn(this)' >Remover</button> </div>";
        newColumnHtml += "</br>";
        newColumnHtml += "</div>";

        //
            		// // fieldsList += "<div class='columnDiv row' id='divColumn"+[i]+"'>";
        		    // fieldsList += "<div class='col-sm'><input type='text' id='display_name" + [i] + "' name='display_name" + [i] + "' value='" + myObj.fields[i].display_name + "' class='totalColumns form-control-sm' /></div>";
        		    // fieldsList += "<div class='col-sm'><input type='text' id='html_name" + [i] + "' name='html_name" + [i] + "' value='" + myObj.fields[i].html_name + "' class='totalColumns form-control-sm' /> </div>";
        		    // fieldsList += "<div class='col-sm'><select id='html_type" + [i] + "' name='html_type" + [i] + "'  class='totalColumns form-control-sm'>"+
        						// 			    "<option value='text'>text</option>" +
        						// 			    "<option value='checkbox'>checkbox</option>" +
        						// 			    "<option value='number'>number</option>" +
        						// 			    "<option value='image'>image</option>" +
        						// 			    "<option value='email'>email</option>" +
        						// 			    "<option value='password'>password</option>" +
        						// 		    "</select></div>";
        		    // fieldsList += "<div class='col-sm'><select id='migration_type" + [i] + "' name='migration_type" + [i] + "' class='form-control-sm'>" +
        						// 		        "<option value='varchar'>varchar</option>" +
        						// 		        "<option value='integer'>integer</option>" +
        						// 		        "<option value='date'>date</option>" +
        						// 		        "<option value='image'>image</option>" +
        						// 		        "<option value='boolean'>boolean</option>" +
        						// 		        "<option value='checkbox'>checkbox</option>" +
        						// 	        "</select></div>";
        	     //    fieldsList += "<div class='col-sm'><input type='text' id='nullable" + [i] + "' name='nullable" + [i] + "' value='" + myObj.fields[i].nullable + "'  class='form-control-sm' /> </div>";
        	     //    fieldsList += "<div class='col-sm'><input type='text' id='default" + [i] + "' name='default" + [i] + "' value='" + myObj.fields[i].default + "'  class='form-control-sm' /> </div> ";
        	     //    fieldsList += "<div class='col-sm'><button type='button' id='"+[i]+"' name='DeleteColumn"+[i]+"' class='deleteColumn btn btn-danger' onclick='Index.DeleteColumn(this)' >Remover</button> </div>";
        	     //    fieldsList += "</br>";
        	     //    fieldsList += "</div>";
        	     //    fieldsList += "\n";

        
        //

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
	BackToTable:function(){
		$("#codeGenerator").slideUp("slow");
		$("#tableSection").slideDown("slow");
	},
	SavingNewJsonFile:function(){
		var formData = $("#saveForm").serialize();
		$.ajax({
		  data:  formData, //data to be send
		  type: "POST",
		  url: "save-json.php",
		  
		  success: function(data){
		  	$("#codeGenerator").slideDown("slow");
		  	$("#tableSection").slideUp("slow");
		    alert(data);
		    console.log(data);
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

	},
	GetingIdOnHover:function(){
		$("*").mouseover(function(){
			$(this).attr('title',$(this).attr('id'));
		});
	}
};
var Routes = {
	/*----------  Subsection comment block  ----------*/
	
	GenerateRoutesString:function(){

		let tableName = $("#tableName").val();
		let tableSingular = $("#tableSingular").val();
		let tablePlural = $("#tablePlural").val();

		let routes = "/*---------- "+tableName+" ----------*/\n";
		routes += "Route::get('/crud/"+tableSingular+"', ['uses' => '"+tableName+"Controller@index', 'as' => 'cruds."+tableSingular+".index']);\n";
		routes += "Route::get('/crud/"+tableSingular+"/show/{id}', ['uses' => '"+tableName+"Controller@show', 'as' => 'cruds."+tableSingular+".show']);\n";
		routes += "Route::get('/crud/"+tableSingular+"/create', ['uses' => '"+tableName+"Controller@create', 'as' => 'cruds."+tableSingular+".create']);\n";
		routes += "Route::post('/crud/"+tableSingular+"/store', ['uses' => '"+tableName+"Controller@store', 'as' => 'cruds."+tableSingular+".store']);\n";
		routes += "Route::get('/crud/"+tableSingular+"/edit/{id}', ['uses' => '"+tableName+"Controller@edit', 'as' => 'cruds."+tableSingular+".edit']);\n";
		routes += "Route::put('/crud/"+tableSingular+"/update/{id}', ['uses' => '"+tableName+"Controller@update', 'as' => 'cruds."+tableSingular+".update']);\n";
		routes += "Route::get('/crud/"+tableSingular+"/destroy/{id}', ['uses' => '"+tableName+"Controller@destroy', 'as' => 'cruds."+tableSingular+".destroy']);\n";
		routes += "/*---------- "+tableName+" ----------*/\n";

		$("#routes_string_output").html(routes);
	},
};
var Controller = {
	GenerateControllerString:function(){
		let col_id = "id";
		let tableName = $("#tableName").val();
		let tableSingular = $("#tableSingular").val();
		let tablePlural = $("#tablePlural").val();
		let totalColumns = $("#totalColumns").html();

		let controllerOutputPhp = "";
		// controllerOutputPhp += "§"; 
		controllerOutputPhp += "<\?php \n§namespace App\\Http\\Controllers; \n§use Illuminate\\Http\\Request;\n§use App\\Http\\Requests;  "; 
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
};
var Model = {
	GenerateModelString:function(){
		let tableName = $("#tableName").val();
		let tableSingular = $("#tableSingular").val();
		let tablePlural = $("#tablePlural").val();
		let totalColumns = $("#totalColumns").html();
		let html_name = "";
		let modelOutputPhp = "";

	    modelOutputPhp +="";

	    modelOutputPhp+="<\?php";
	    modelOutputPhp+=" \n § ";
	    modelOutputPhp+=" \n §namespace App\\Models;";
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

	    let requestStringPhp = "";

	    requestStringPhp+="<\?php";
	    requestStringPhp+=" \n § ";
	    requestStringPhp+=" \n § namespace App\\Http\\Requests;";
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
			    createViewStringPhp +="\n §<form id='saveForm' class='form-horizontal' role='form' method='POST' action='{\{route(\"cruds."+tableSingular+".store\")}}' enctype='multipart/form-data'>";
			    createViewStringPhp +="\n §{\{ csrf_field() }\}";

			    for (var i = 0; i < totalColumns; i++) {

			    	let display_name = $("#display_name"+i).val();
			    	let html_name = $("#html_name"+i).val();
			    	let html_type = $("#html_type"+i).val();
			    	let migration_type = $("#migration_type"+i).val();
			    	let nullable = $("#nullable"+i).val();
			    	let create_view_visibility = $("#create_view_visibility"+i).is(":checked");
			    	let defaults = $("#default"+i).val();
		    	
			    	if (create_view_visibility) {
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
		            }else{
		            	createViewStringPhp =+ "";
		            	// totalColumns++;
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
		
	}
};


