//sap.ui.controller("sap.Bekon.controller.ZSODCMPE", {
sap.ui.define([
		"sap/Bekon/controller/BaseController"
	], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.Bekon.controller.ZSODCMPE", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf demotable.ZSODCMPE
*/
	onInit: function() {
		var sUrl = "proxy/http/cep001.ct.com:8000/sap/opu/odata/sap/ZBEKON_TEST_SRV/ZSODCMPESet";
		var oModel = new sap.ui.model.json.JSONModel(sUrl);
		this.getView().setModel(oModel,"sodcmpe");

	},
	navigateToPage: function(view){
		var json = {};
		json.riskid = riskid;
		console.log("RISKID: "+json.riskid);
		this.oModel.setData(json);
		sap.ui.getCore().setModel(this.oModel);
		var oRouter = sap.ui.core.routing.Router.getRouter("approuter");
		oHashChanger = sap.ui.core.routing.HashChanger.getInstance();
		oHashChanger.setHash(oRouter.getURL(view));
		
	},
	
		onListItemPressed : function(oEvent){
		var oSelectedItem = oEvent.getParameter("listItem");
	    var riskid = oSelectedItem.getBindingContext("sodcmpe").getProperty("Riskid");
	    console.log(riskid);
	    sap.m.MessageToast.show(riskid);
	    var sUrl = "proxy/http/cep001.ct.com:8000/sap/opu/odata/sap/ZBEKON_TEST_SRV/ZSODCMPESet" + "('"+riskid+"')" ;
	    //sap.m.MessageToast.show(sUrl);
	    console.log(sUrl);

	}
	
	});
});