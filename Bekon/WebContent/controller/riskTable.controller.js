//sap.ui.controller("sap.Bekon.controller.riskTable", {
sap.ui
		.define(
				[ "sap/Bekon/controller/BaseController","sap/Bekon/model/formatter" ],
				function(BaseController, formatter) {
					"use strict";
					
					return BaseController
							.extend(
									"sap.Bekon.controller.riskTable",
									{
										formatter: formatter,


										/**
										 * Called when a controller is
										 * instantiated and its View controls
										 * (if available) are already created.
										 * Can be used to modify the View before
										 * it is displayed, to bind event
										 * handlers and do other one-time
										 * initialization.
										 * 
										 * @memberOf demotable.riskTable
										 */
										onInit : function() {
											var sUrl = "proxy/http/cep001.ct.com:8000/sap/opu/odata/sap/ZBEKON_TEST_SRV/ZRISKSet";
											var oModel = new sap.ui.model.json.JSONModel(sUrl);
											this.getView().setModel(oModel,	"risk");
											
										},
										
										onNavPress : function() {
											this.myNavBack("cockpit");
										},
										onNavBack : function() {
											var oHistory = sap.ui.core.routing.History
													.getInstance(), sPreviousHash = oHistory
													.getPreviousHash(), oCrossAppNavigator = sap.ushell
													&& sap.ushell.Container
													&& sap.ushell.Container
															.getService("CrossApplicationNavigation");

											if (sPreviousHash !== undefined
													|| !oCrossAppNavigator) {
												// The history contains a
												// previous entry
												window.history.go(-1);
											} else if (oCrossAppNavigator) {
												// Navigate back to FLP home
												// TODO: Test this in a working
												// sandbox, with the current
												// version it is not possible
												oCrossAppNavigator.toExternal({
													target : {
														shellHash : "#"
													}
												});
											}
										},

										/* =========================================================== */
										/* internal methods */
										/* =========================================================== */

										/**
										 * Shows the selected item on the object
										 * page On phones a additional history
										 * entry is created
										 * 
										 * @param {sap.m.ObjectListItem}
										 *            oItem selected Item
										 * @private
										 */
										_showObject : function() {
											this.getRouter().navTo(
													"berechtigungspruefung"
											/*
											 * , { ID:
											 * oItem.getBindingContext().getProperty("ID") }
											 */
											);
										}

									});
				});