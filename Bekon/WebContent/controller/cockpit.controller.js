sap.ui.define(["sap/ui/core/mvc/Controller",
		"sap/Bekon/controller/BaseController"
], function (Controller,BaseController) {
	"use strict";

	return BaseController.extend("sap.Bekon.controller.cockpit", {

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		getRouter : function () {
			return sap.ui.core.UIComponent.getRouterFor(this);
		},
		onBeforeRendering: function(){
			//var oView = this.getView(); 
			//oView.byId("tabStripDetail").addStyleClass("sapUiLargeMarginBegin");
		},
				
		onInit : function () {
			//var oView = this.getView(); 
			//oView.byId("tabStripDetail").addStyleClass("sapUiLargeMarginBegin");
			this.getView().byId("tabStripDetail").addStyleClass("sapUiLargeMarginBegin");
		},
		onBerpruefung: function(){
			this.getRouter().navTo("berechtigungspruefung");
		},
		onUebMinpruefung: function(){
			this.getRouter().navTo("minderungspruefung");
		},
		onRisk: function(){
			this.getRouter().navTo("risktable");
		},
								
		onPressBtn1: function(oEvent){
			//var oRouter = new sap.ui.core.UIComponent.getRouterFor(this);
			//oRouter.navTo("berechtigungspruefung");
			this._showObject(oEvent.getSource());
			
		},
		_showObject : function (oItem) {
			this.getRouter().navTo("berechtigungspruefung");
		},
	

		_onObjectMatched : function (oEvent) {
			//var sObjectPath = "/Suppliers/" + oEvent.getParameter("arguments").ID;
			//this._bindView(sObjectPath);
		},

		/**
		 * Binds the view to the object path.
		 *
		 * @function
		 * @param {string} sObjectPath path to the object to be bound
		 * @private
		 */
		_bindView : function (sObjectPath) {
			var oView = this.getView();
			oView.bindElement(sObjectPath);
		}
		
		
	});

});