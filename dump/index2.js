	$(document).ready(function(){
		Index.GetingJsonFieldsData();
		// setTimeout(function(){ Index.CreatingNewJsonFile(); }, 1000);
		
		$("#updateJsonTable").click(Index.CreatingNewJsonFile);
	});


	var Index = {
	    GetingJsonFieldsData: function() {
	        // $.getJSON("fields.json", function(data) {
	        $.getJSON("fields.json", function(data) {
	            // var items = [];
	            var fieldsList = "";
	            totalColumns = 0;
	            $.each(data, function(key, val) {
	                // items.push( "<li id='" + key + "'>" + val["display"]+ " | " +val["name"]+"</li>" );
	                fieldsList += "Display name: <input type='text' id='display_name" + [key] + "' name='display_name" + [key] + "' value='" + val["display"] + "' class='totalColumns' /> ";
	                fieldsList += "Name: <input type='text' id='html_name" + [key] + "' name='html_name" + [key] + "' value='" + val["name"] + "'  /> ";
	                fieldsList += "Html Type<select id='html_type" + [key] + "' name='html_type" + [key] + "' >" +
	                    "<option value='varchar'>varchar</option>" +
	                    "<option value='integer'>integer</option>" +
	                    "<option value='date'>date</option>" +
	                    "<option value='image'>image</option>" +
	                    "<option value='boolean'>boolean</option>" +
	                    "<option value='checkbox'>checkbox</option>" +
	                    "</select> ";
	                fieldsList += "Migration Type<select id='migration_type" + [key] + "' name='migration_type" + [key] + "' >" +
	                    "<option value='varchar'>varchar</option>" +
	                    "<option value='integer'>integer</option>" +
	                    "<option value='date'>date</option>" +
	                    "<option value='image'>image</option>" +
	                    "<option value='boolean'>boolean</option>" +
	                    "<option value='checkbox'>checkbox</option>" +
	                    "</select> ";
	                fieldsList += "Nullable: <input type='text' id='nullable" + [key] + "' name='nullable" + [key] + "' value='" + val["nullable"] + "'  /> ";
	                fieldsList += "Default: <input type='text' id='default" + [key] + "' name='default" + [key] + "' value='" + val["default"] + "'  /> ";

	                fieldsList += "</br>\n";
	                totalColumns++;
	            });
	            $("#fields").html(fieldsList);
	            $("#totalColumns").html(totalColumns);

	            // Index.CreatingNewJsonFile();
	            // 
	            // 
	            
    			let newJsonFile = "{\n\t";
    	    	for (let i = 1; i <= totalColumns; i++) {	
    	    		let newDisplayName = $("#display_name"+i).val();
    	    		let newHtmlName = $("#html_name"+i).val();
    	    		let newHtmlType = $("#html_type"+i).val();
    	    		let newMigrationType = $("#migration_type"+i).val();
    	    		let newNullable = $("#nullable"+i).val();
    	    		let newDefault = $("#default"+i).val();
        			
        			newJsonFile += "\"" + i + "\": {";
        			newJsonFile += "\"display\":\"" + newDisplayName + "\",";
        			newJsonFile += "\"name\":\"" + newHtmlName + "\",";
        			newJsonFile += "\"html_type\":\"" + newHtmlType + "\",";
        			newJsonFile += "\"migration_type\":\"" + newHtmlType + "\",";
        			newJsonFile += "\"nullable\":\"" + newNullable + "\",";
        			newJsonFile += "\"default\":\"" + newDefault + "\"";
        			newJsonFile += "}";
        			
    	    			if(i<totalColumns){
        					newJsonFile += ",";
        					newJsonFile += "\n\t";
    	    			}else{
    	    				newJsonFile += "\n";
    	    			}
    	    	}
    	    	newJsonFile += "}";
    	    	console.log(newJsonFile);
    	    	$("#jsonOutPut").val(newJsonFile);

	        });
	    },
	    CreatingNewJsonFile:function(){
	    	// alert("asdf");
	    	let totalColumns = $("#totalColumns").html();
	    	// alert(totalColumns);
			let newJsonFile = "{\n\t";
	    	for (let i = 1; i <= totalColumns; i++) {	
	    		let newDisplayName = $("#display_name"+i).val();
	    		let newHtmlName = $("#html_name"+i).val();
	    		let newHtmlType = $("#html_type"+i).val();
	    		let newMigrationType = $("#migration_type"+i).val();
	    		let newNullable = $("#nullable"+i).val();
	    		let newDefault = $("#default"+i).val();
    			
    			newJsonFile += "\"" + i + "\": {";
    			newJsonFile += "\"display\":\"" + newDisplayName + "\",";
    			newJsonFile += "\"name\":\"" + newHtmlName + "\",";
    			newJsonFile += "\"html_type\":\"" + newHtmlType + "\",";
    			newJsonFile += "\"migration_type\":\"" + newHtmlType + "\",";
    			newJsonFile += "\"nullable\":\"" + newNullable + "\",";
    			newJsonFile += "\"default\":\"" + newDefault + "\"";
    			newJsonFile += "}";
    			
	    			if(i<totalColumns){
    					newJsonFile += ",";
    					newJsonFile += "\n\t";
	    			}else{
	    				newJsonFile += "\n";
	    			}

    			
	    	}
	    	newJsonFile += "}";
	    	console.log(newJsonFile);
	    	$("#jsonOutPut").val(newJsonFile);
	    }
	};	


