sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("rinku.shopping.cart.shoppingcart.Cart", {      		
		
		onBack:function(){
				var oHistory = sap.ui.core.routing.History.getInstance();
				var oPrevHash = oHistory.getPreviousHash();
				if (oPrevHash !== undefined) {
					window.history.go(-1);
				}
		},		
		onCartItemPress:function(){
			
			
			
		}
	});

});