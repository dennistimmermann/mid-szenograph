stringList="";

var selInputList = [];
var selOutputList = [];
var filteredExampleList = [];
var filteredInputList = [];
var filteredOutputList = [];

var isSearching=false;

$( document ).ready(function() 
{
	createList(inputList,"Szenografisches Element","#inputList-container");
	createList(outputList,"Szenografische Realisation","#outputList-container");
	searchList(filteredInputList,inputList,"#inputList-container");
	drawExampleList();
	playnormalHide();

});

function searchList(FilterList,Oldlist,div)
{
	$('.search-input').bind('keyup', function (evt) 
	{
		var  searchText = evt.target.value.toLowerCase();

		if (searchText=="")
		{
			isSearching=false;
		}
		else
		{
			isSearching=true;
		}
		FilterList=Oldlist;
		FilterList=FilterList.filter(function(e) 
		{
			var inList = false;
			
			for (var j in e.examples) 
			{
				if (e.examples[j].toLowerCase().trim().indexOf(searchText) !== -1) 
				{
					inList=true;
				}
			}

			for (var i in e.tags) 
			{
				if (e.tags[i].toLowerCase().trim().indexOf(searchText) !== -1) 
				{
					inList=true;

				}
			}

			if (e.name.toLowerCase().trim().indexOf(searchText) !== -1) 
			{
				inList=true;

			}

			return inList;
		});	

		if(isSearching==true)
		{
			var filterListIds=[];
			for (var i in FilterList)
			{
				filterListIds.push(FilterList[i].id);
			}
			
			$(""+div+" .selector").hide();
			$(""+div+" p").hide();

					
			$( ""+div+" .selector" ).each(function( index ) 
			{
				for (var j in filterListIds)
				{
					if($(this).parent().data("id")==filterListIds[j])
					{
						$(this).show();
						$(this).siblings().show();
						$(this).parents().children().show();
					}
					
				}
			});
		}

		else
		{
			$( ""+div+" .selector" ).each(function( index ) 
			{
				$(this).siblings().show();
				$(this).parent().children().show();
				$(this).show();
			});
		}

	});
}

function playnormalHide()
{
	if(isSearching==false)
	{
		$( ".selector" ).each(function( index ) 
		{
			$(this).siblings().show();
			$(this).parent().children().show();
			$(this).show();
		});		
	}

	$( ".selector" ).click(function( index ) 
	{
		if(isSearching==true)
		{
			$('.search-input').val("");
			isSearching=false;	
			$(".selector" ).each(function( index ) 
			{
				$(this).siblings().show;
				$(this).parent().children("p").show();
				$(this).show();
			});

		}
		
	});	
}

function drawExampleList()
{
	if(filteredExampleList.length>0)
	{
		createExampleList(filteredExampleList,"#exampleList-container");
	}
	else
	{
		$("#exampleList-container").empty();
		$("#exampleList-container").append("<div class="+"example"+" ><img src="+"img/Example_img/img-test.png"+"><h4>Keine Ergebinsse</h4><p class="+"infotext"+">Leider konnten keine Ergebinsse gefunden werden.<br>Probiere es mit anderen Suchbegriffen erneut.</p></div>");
	}
}

function createExampleList(arr,appendTo)
{
	$(appendTo).empty();
	for (var i in arr)
	{
		stringList+= "<div class="+"example"+" data-id="+arr[i].id+"><img src="+arr[i].preview_image+"><h4>"+arr[i].name+"</h4><p class="+"infotext"+">"+arr[i].description+"</p><a href="+"examples/"+arr[i].id+" class="+"example_link"+">&#8594 mehr Informationen</a></div>";
	}
	$(appendTo).append(stringList);
	stringList="";
}

function highlight(mainDiv,arr)
{
	$( ""+mainDiv+" .selector" ).each(function( index ) 
	{
		if($.inArray($(this).parent().data("id"),arr)== -1)
		{
			$(this).removeClass("highlight");
		}
		else
		{
			$(this).addClass("highlight");
		}
	});
}

function getId(mainDiv,arr,addTo)
{ 
	$(mainDiv).on("click",".selector", function(event) 
	{	
		if($.inArray($(this).parent().data("id"),arr)== -1)
		{
			arr.push($(this).parent().data("id"));
		}
		else
		{
			arr.splice( $.inArray($(this).parent().data("id"),arr) ,1 );
		}


		if($.inArray($(this).parent().parent().parent().data("id"),arr)== -1)
		{
		}
		else
		{
			arr.splice( $.inArray($(this).parent().parent().parent().data("id"),arr) ,1 );
		}

		drawExampleList();
		$( addTo).text("Ids: " +arr);
		highlight(mainDiv,arr);
    });
}

function createList(arr,startParameter,appendTo) 
{
	for (var i in arr)
	{
		if(arr[i].type == startParameter)
		{
			stringList+="<li data-id=\""+arr[i].id+"\">";
			if (arr[i].description==""&& arr[i].iconpath!="")
				{
					stringList+= "<div class=\"selector\"><img src=\""+arr[i].iconpath+"\">"+arr[i].name+"</div>";
				}

				else if (arr[i].description!="" && arr[i].iconpath!="")
				{
					stringList+= "<div class=\"selector\"><img src=\""+arr[i].iconpath+"\">"+arr[i].name+"</div>";
					stringList+= "<p class="+"p-alt"+">"+arr[i].description+"</p>"
				}

				else if (arr[i].description != "" && arr[i].iconpath=="")
				{
					stringList+= "<div class=\"selector\">"+arr[i].name+"</div>"
					stringList+= "<p>"+arr[i].description+"</p>"
				}

				else
				{
					stringList+= "<div class=\"selector\">"+arr[i].name+"</div>"
				}
			createListPart(arr,arr[i].items);
			stringList+="</li>";
		}
	}
	$(appendTo).append(stringList);
	stringList="";
}

function filterList(selList,attribute)
{
	for (var i in selList) {
		filteredExampleList=filteredExampleList.filter(function(e) {
			var inList = false;
			
			for (var j in e[attribute]) 
			{
				if (e[attribute][j] == selList[i]) 
				{
					inList=true;
				}
			};

			return inList;
		});
	}

	return filteredExampleList
}

function createListPart(arr,this_items) 
{
	for (var i in this_items)
	{
		stringList+="<ul>";

		for (var j in arr)
		{
			if(this_items[i]==arr[j].id)
			{
				stringList+="<li data-id=\""+arr[j].id+"\">";
				if (arr[i].description==""&& arr[j].iconpath!="")
				{
					stringList+= "<div class=\"selector\"><img src=\""+arr[j].iconpath+"\">"+arr[j].name+"</div>";
				}

				else if (arr[i].description!="" && arr[j].iconpath!="")
				{
					stringList+= "<div class=\"selector\"><img src=\""+arr[j].iconpath+"\">"+arr[j].name+"</div>";
					stringList+= "<p class="+"p-alt"+">"+arr[j].description+"</p>"
				}
				else if (arr[i].description != "" && arr[j].iconpath=="")
				{
					stringList+= "<div class=\"selector\">"+arr[j].name+"</div>"
					stringList+= "<p>"+arr[j].description+"</p>"
				}
				else
				{
					stringList+= "<div class=\"selector\">"+arr[j].name+"</div>"
				}
				


				if(arr[j].items.length>0)
				{
					createListPart(arr,arr[j].items);
				}

				stringList+="</li>";
			}
		}
		stringList+="</ul>";
	}
}
