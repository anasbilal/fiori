sap.ui.define([
		"sap/Bekon/controller/BaseController"
	], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.Bekon.controller.Minderungspruefung", {

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		onInit : function () {
			// Create JSON data model
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("service/minderung.json");
			//sap.ui.getCore().setModel(oModel,"minderung");
			var oDropdownBox1 = this.byId("DropdownBox1");
			oDropdownBox1.setModel(oModel,"minderung");
			var oItemTemplate1 = new sap.ui.core.ListItem();
			oItemTemplate1.bindProperty("text", "minderung>device");
			oItemTemplate1.bindProperty("enabled", "{minderung>enabled}");
			oDropdownBox1.bindItems("minderung>/systeme", oItemTemplate1);
			var oDropdownBox2 = this.byId("DropdownBox2");
			oDropdownBox2.setModel(oModel,"minderung");
			var oItemTemplate2 = new sap.ui.core.ListItem();
			oItemTemplate2.bindProperty("text", "minderung>mandt");
			oItemTemplate2.bindProperty("enabled", "{minderung>enabled}");
			oDropdownBox2.bindItems("minderung>/mandante", oItemTemplate2);
			var oDropdownBox3 = this.byId("DropdownBox3");
			oDropdownBox3.setModel(oModel,"minderung");
			var oItemTemplate3 = new sap.ui.core.ListItem();
			oItemTemplate3.bindProperty("text", "minderung>rolle");
			oItemTemplate3.bindProperty("enabled", "{minderung>enabled}");
			oDropdownBox3.bindItems("minderung>/rollen", oItemTemplate3);
			var oDropdownBox4 = this.byId("DropdownBox4");
			oDropdownBox4.setModel(oModel,"minderung");
			var oItemTemplate4 = new sap.ui.core.ListItem();
			oItemTemplate4.bindProperty("text", "minderung>tcode");
			oItemTemplate4.bindProperty("enabled", "{minderung>enabled}");
			oDropdownBox4.bindItems("minderung>/tcodes", oItemTemplate4);
			var oDropdownBox5 = this.byId("DropdownBox5");
			oDropdownBox5.setModel(oModel,"minderung");
			var oItemTemplate5 = new sap.ui.core.ListItem();
			oItemTemplate5.bindProperty("text", "minderung>tcode");
			oItemTemplate5.bindProperty("enabled", "{minderung>enabled}");
			oDropdownBox5.bindItems("minderung>/tcodes", oItemTemplate5);
		},
		
		/**
		 * Navigates back to the Master
		 * @function
		 */
		onNavPress : function () {
			this.myNavBack("cockpit");
		},
		
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