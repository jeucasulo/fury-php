$(document).ready(function(){
	/*----------  Index  ----------*/
	Index.GettingJsonTableData();
	Index.SetingSelects();
	Index.CreatingNewJsonFile();
	Index.GetingIdOnHover();
	$("#updateJsonTable").click(Index.UpdatingAndSavingCode);
	$("#addNewCOlumn").click(Index.AddNewColumn);
	$(".deleteColumn").on('click', "deleteColumn",Index.DeleteColumn);

	/*----------  Routes  ----------*/
	$("#generateRoutes").click(Routes.GenerateRoutesString);


	/*----------  Controller  ----------*/
	$("#generateController").click(Controller.GenerateControllerString);


	/*----------  Model  ----------*/
	$("#generateModel").click(Model.GenerateModelString);

	/*----------  Request  ----------*/
	$("#generateRequest").click(Request.GenerateRequestString);
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
		    alert(data);
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
		
	},
	GenerateIndexView:function(){

	},
	GenerateShowView:function(){

	},
	GenerateEditView:function(){
		
	}
};


