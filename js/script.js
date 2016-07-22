var selInputList = [];
var selOutputList = [];

$( document ).ready(function() 
{
    createList("json/input.json",".input_list","input","attribute","sensor","i");
    createList("json/output.json",".output_list","output","attribute","sensor","o");
    idSelection();
    loadExampleList();
});

function loadExampleList()
{
	$.getJSON("json/example.json", function(data)
	{
		$.each(data, function(index0, value0)
		{
			$(".example_list").append("<div class="+"example"+" id="+value0.id+"><img src="+value0.imagepath+"><h4>"+value0.name+"</h4><p class="+"infotext"+">"+value0.description+"</p><a href="+value0.link+" class="+"example_link"+">&#8594 mehr Informationen</a></div>");
		}); 
	});   
}

function searchExampleList()
{
	$.getJSON("json/example.json", function(data)
	{	 
	});   
}

function idSelection()
{ 
	$( ".input_list" ).on("click",".i_selectable", function(event) 
	{	
		$( this ).toggleClass( "highlight" );
		if($.inArray(this.id,selInputList)== -1)
		{
			selInputList.push(this.id);
		}
		else
		{
			selInputList.splice( $.inArray(this.id,selInputList) ,1 );
		}
		console.log(selInputList)
		$( ".seletion_input" ).text("Selected Input Ids: " +selInputList);
		
    });

    $( ".output_list" ).on("click",".o_selectable", function(event) 
	{	
		$( this ).toggleClass( "highlight" );
		if($.inArray(this.id,selOutputList)== -1)
		{
			selOutputList.push(this.id);
		}
		else
		{
			selOutputList.splice( $.inArray(this.id,selOutputList) ,1 );
		}
		console.log(selOutputList)
		$( ".seletion_output" ).text("Selected output Ids: " +selOutputList);
    });
}

function createList(jsonPath,attachToDiv,datatype1,datatype2,datatype3,classType)
{
	$.getJSON(jsonPath, function(data)
	{
		//console.log(data);
		
		$.each(data, function(index0, value0) 
		{
			if(value0.type==datatype1)
			{
				if(value0.iconpath!="")
				{
					if(value0.description!="")
					{
						$(attachToDiv).append("<li><div class="+classType+"_selectable"+" id="+value0.id+"><img class="+"mini-icon"+" src="+value0.iconpath+">"+value0.name+" <p class="+"list_tooltip"+" id="+"tt1"+">"+value0.description+"</p></div><ul id="+classType+"_sub"+index0+"></ul></li>");
					}
					else
					{
						$(attachToDiv).append("<li><div class="+classType+"_selectable"+" id="+value0.id+"><img class="+"mini-icon"+" src="+value0.iconpath+">"+value0.name+"</div><ul id="+classType+"_sub"+index0+"></ul></li>");
					}
				}
				else
				{
					if(value0.description!="")
					{
						$(attachToDiv).append("<li<div class="+classType+"_selectable"+" id="+value0.id+">"+value0.name+"<p class="+"list_tooltip"+" id="+"tt2"+">"+value0.description+"</p></div><ul id="+classType+"_sub"+index0+"></ul></li>");
					}
					else
					{
						$(attachToDiv).append("<li<div class="+classType+"_selectable"+" id="+value0.id+">"+value0.name+"</div><ul id="+classType+"_sub"+index0+"></ul></li>");
					}
				}
				
				if(value0.items!=null)
				{	
					$.each(value0.items, function(index1,value1)
					{
					 	$.each(data, function(index2,value2) 
					 	{
					 		if(value1==value2.id)
					 		{
					 			if(value2.type=datatype2)
					 			{
					 				if(value2.iconpath!="")
									{
										if(value2.description!="")
										{
											$("#"+classType+"_sub"+index0+"").append("<li><div class="+classType+"_selectable"+" id="+value2.id+"><img class="+"mini-icon"+" src="+value2.iconpath+">"+value2.name+" <p class="+"list_tooltip"+" id="+"tt1"+">"+value2.description+"</p></div><ul id="+classType+"_subsub"+index2+"></ul></li>");
										}
										else
										{
											$("#"+classType+"_sub"+index0+"").append("<li><div class="+classType+"_selectable"+" id="+value2.id+"><img class="+"mini-icon"+" src="+value2.iconpath+">"+value2.name+"</div><ul id="+classType+"_subsub"+index2+"></ul></li>");
										}
									}
									else
									{
										if(value2.description!="")
										{
											$("#"+classType+"_sub"+index0+"").append("<li><div class="+classType+"_selectable"+" id="+value2.id+">"+value2.name+"<p class="+"list_tooltip"+" id="+"tt2"+">"+value2.description+"</p></div><ul id="+classType+"_subsub"+index2+"></ul></li>");
										}
										else
										{
											$("#"+classType+"_sub"+index0+"").append("<li><div class="+classType+"_selectable"+" id="+value2.id+">"+value2.name+"</div><ul id="+classType+"_subsub"+index2+"></ul></li>");
										}
									}

					 				if(value2.items!=null)
									{
										$.each(value2.items, function(index3,value3)
										{
										 	$.each(data, function(index4,value4) 
										 	{
										 		if(value3==value4.id)
										 		{
										 			if(value4.type=datatype3)
										 			{
										 				if(value4.iconpath!="")
														{
															if(value4.description!="")
															{
																$("#"+classType+"_subsub"+index2+"").append("<li><div class="+classType+"_selectable"+" id="+value4.id+"><img class="+"mini-icon"+" src="+value4.iconpath+">"+value4.name+" <p class="+"list_tooltip"+" id="+"tt1"+">"+value4.description+"</p></div></li>");
															}
															else
															{
																$("#"+classType+"_subsub"+index2+"").append("<li><div class="+classType+"_selectable"+" id="+value4.id+"><img class="+"mini-icon"+" src="+value4.iconpath+">"+value4.name+"</div></li>");
															}
														}
														else
														{
															if(value4.description!="")
															{
																$("#"+classType+"_subsub"+index2+"").append("<li><div class="+classType+"_selectable"+" id="+value4.id+">"+value4.name+"<p class="+"list_tooltip"+" id="+"tt2"+">"+value4.description+"</p></div></li>");
															}
															else
															{
										 						$( "#"+classType+"_subsub"+index2+"" ).append("<li><div class="+classType+"_selectable"+" id="+value4.id+">"+value4.name+"</div></li>");
															}
														}
										 			}
										 		}
										 	});	
										});
									}
					 			}
					 		}
					 	});	
					});
				}
			}
		});	
    });   
}
