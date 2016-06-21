var list = "<ul id='sizeList'><li>30</li><li>40</li><li>50</li><li>60</li></ul>";


$(document).ready(function(){
	popTiles();
	clickTiles();
});







function popTiles(){
	var forSaleItems = ($(".tileContainer").find("ul"));
	forSaleItems.addClass("addFlex_center");
	forSaleItems.find("li").each(function(){
		$(this).on("click",function(){
			clickTiles(this);
		});
		$(this).addClass("tile-item");
		$(this).on("mouseenter",function(){
			$(this).addClass("highlighted");
			$(this).css("background-color","rgba(0,0,0,0.90)");
		});
		$(this).on("mouseleave",function(){
			$(this).removeClass("highlighted");
			$(this).css("background-color","rgba(0,0,0,0.70)");
		})
	});
}

function clickTiles(tile){
	$(this).toggleClass("addFlex_center");
	$(tile).append(list);
}
