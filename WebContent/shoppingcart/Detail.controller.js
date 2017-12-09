sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("rinku.shopping.cart.shoppingcart.Detail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").productPath,
				model: "product"
			});
		},
		onLogout:function(){	 
		     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			     oRouter.navTo("login");
		         history.go(0);
		         
		        /* var appId = sap.ui.getCore().byId('__xmlview0--app');
		         appId.setMode('HideMode');		*/	
		},
		//Add the product to cart
		handleAddButtonPress : function (e) {	
			var oModel     = this.getView().getModel("product");
			var oPath      = e.getSource().getBindingContext("product").getPath(); 
			var oProduct   = oModel.getProperty(oPath);
			
			this._addProduct(oProduct);			
		},

		_addProduct: function(oProduct) {
			var oCartModel   = this.getView().getModel("cartProducts");
			var oCartData    = oCartModel.getData();
			var aCartEntries = oCartData.entries;

			// find existing entry for product
			var oEntry = null;
			for (var i = 0 ; i < aCartEntries.length ; i ++) {
				if (aCartEntries[i].ProductID === oProduct.ProductID) {
					oEntry = aCartEntries[i];
					break;
				}
			}
			
			if (oEntry === null) {
				// create new entry
				oEntry = {
					Id : jQuery.sap.uid(),
					Quantity : 1,					
					ProductID : oProduct.ProductID,
					ProductName : oProduct.ProductName,
					QuantityPerUnit: oProduct.QuantityPerUnit,
					Price : oProduct.UnitPrice,					
					SupplierName : "Rinku Sahu",
					Status : oProduct.Discontinued,
					stockUnit : oProduct.UnitsInStock
				};
				oCartData.entries[oCartData.entries.length] = oEntry;

			} else {
				// update existing entry
				oEntry.Quantity += 1;
			}
			// recalculate total price
			oCartData.totalPrice = 0;
			for (var j = 0 ; j < oCartData.entries.length ; j ++) {
				oCartData.totalPrice += parseFloat(oCartData.entries[j].Price) * oCartData.entries[j].Quantity;
			}

			//if there is at least one entry, the edit button is shown
			oCartData.showEditAndProceedButton = true;
			// update model
			oCartModel.setData(oCartData);

			var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			    MessageToast.show(oBundle.getText("PRODUCT_MSG_ADDED_TO_CART"));
		},
	});
});