$(document).ready(function(){
	var forSaleItems = ($("#forSale").find("ul"));
	forSaleItems.find("li").each(function( index ){
		 $(this).addClass("itemCell");
	});
});