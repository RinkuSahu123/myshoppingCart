//Developer Name: Rinku Sahu, Altimetrik
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("rinku.shopping.cart.shoppingcart.Login", {
		
     /*--Log in button action------------------------------------------*/
		onLogin:function(){
    	 var oId =  this.getView().byId("inpLogin").getValue().trim();
    	 var oPw =  this.getView().byId("inpPwd").getValue().trim();    	 
    	 if(oId == ''){
    		this.getView().byId("inpLogin").setValueState("Error"); 
    	 }else if(oPw == ''){
    		 this.getView().byId("inpPwd").setValueState("Error");
    		 this.getView().byId("inpLogin").setValueState("None"); 
    	 }else if(oId == '' && oPw == ''){
    		 this.getView().byId("inpLogin").setValueState("Error"); 
    		 this.getView().byId("inpPwd").setValueState("Error");
    	 }else{
    		 this.getView().byId("inpLogin").setValueState("None"); 
    		 this.getView().byId("inpPwd").setValueState("None");
    		 
    		 
    	     var appId = sap.ui.getCore().byId('__xmlview0--app');
    		     appId.setMode('ShowHideMode');
    		 
    	     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
 			     oRouter.navTo("master");

               setTimeout(function(){    
 			    oRouter.navTo("detail", {
 					productPath: "Products(1)"
 				});	
               },500);
    	 }    	 	 
     },
     
	});
});