sap.ui.define([
		"sap/Bekon/controller/BaseController"
	], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.Bekon.controller.NotFound", {

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		onInit : function () {
			//this.getRouter().getRoute("notFound").attachPatternMatched(this._onObjectMatched, this);
		},
		
		/**
		 * Navigates back to the Master
		 * @function
		 */
				
		/**
		 * Event handler when a table item gets pressed
		 * @param {sap.ui.base.Event} oEvent the table selectionChange event
		 * @public
		
		/**
		 * Navigates back in the browser history, if the entry was created by this app.
		 * If not, it navigates to the Fiori Launchpad home page
		 *
		 * @public
		 */
		
		// TODO - we don't need FLP stuff...
		onNavBack : function () {
			var oHistory = sap.ui.core.routing.History.getInstance(),
				sPreviousHash = oHistory.getPreviousHash(),
				oCrossAppNavigator = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService("CrossApplicationNavigation");

			if (sPreviousHash !== undefined || !oCrossAppNavigator) {
				// The history contains a previous entry
				window.history.go(-1);
			} else if (oCrossAppNavigator) {
				// Navigate back to FLP home
				// TODO: Test this in a working sandbox, with the current version it is not possible
				oCrossAppNavigator.toExternal({
					target: {shellHash: "#"}
				});
			}
		},
		_onObjectMatched : function (oEvent) {
			/*var sObjectPath = "/Suppliers/" + oEvent.getParameter("arguments").ID;
			this._bindView(sObjectPath);*/
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