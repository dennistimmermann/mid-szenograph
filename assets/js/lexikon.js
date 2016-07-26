stringList="";

var selInputList = [];
var selOutputList = [];
var filteredExampleList = [];

$( document ).ready(function() 
{
	createList(inputList,"Szenografisches Element","#inputList-container");
	createList(outputList,"Szenografische Realisation","#outputList-container");

	drawExampleList();
	//myHide("#inputList-container");
	searchList();

});

function searchList()
{
	$('.search-input').bind('keyup', function (evt) 
	{
		var searchText = evt.target.value.toLowerCase();
	})
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
