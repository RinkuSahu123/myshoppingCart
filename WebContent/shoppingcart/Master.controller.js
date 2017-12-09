sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("rinku.shopping.cart.shoppingcart.Master", {      		
		onListItemPress:function(oEvent){
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				productPath: oItem.getBindingContext("product").getPath().substr(1)
			});			
		},
		
		onCartPress:function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("cart", {
				//productPath: oItem.getBindingContext("product").getPath().substr(1)
			});			
		}
	});

});