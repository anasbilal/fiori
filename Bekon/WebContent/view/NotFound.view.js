sap.ui.jsview("sap.Bekon.view.NotFound", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.NotFound
	*/ 
	getControllerName : function() {
		return "sap.Bekon.controller.NotFound";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.NotFound
	*/ 
	createContent : function(oController) {
		// Simple MessagePage
		var oMessagePage = new sap.m.MessagePage("messagePage", {
			title: "{i18n>notFoundTitle}",
			text: "{i18n>notFoundText}",
			icon: "{sap-icon://document}",
			id: "page",
			//description: "Description",
			customDescription: new sap.m.Link({text: "{i18n>backToCockpit}"}),
			showNavButton: true
			//navButtonPress: myNavBack
		});
		oMessagePage.placeAt("content");
	}

});