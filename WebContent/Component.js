sap.ui.define([
'sap/ui/core/UIComponent',               
'sap/ui/model/resource/ResourceModel',
'sap/ui/model/json/JSONModel',
], function (UIComponent,ResourceModel,JSONModel) {
	"use strict";

	return UIComponent.extend("rinku.shopping.cart.Component", {
		metadata : {
			manifest: "json"
		},

		init : function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
            
			//create and set cart model
			var oCartModel = new JSONModel({
				entries: [],
				totalPrice: "0",
				showEditAndProceedButton: false
			});
			this.setModel(oCartModel, "cartProducts");
			
			// create the views based on the url/hash
			this.getRouter().initialize();
		}
	});
});
