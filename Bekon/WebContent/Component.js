sap.ui.define([ "sap/ui/core/UIComponent",
		"sap/ui/model/resource/ResourceModel", "sap/ui/model/json/JSONModel" ],
		function(UIComponent, ResourceModel, JSONModel) {
			"use strict";

			return UIComponent.extend("sap.Bekon.Component", {

				metadata : {
					// manifest : "json"
					"rootView" : "sap.Bekon.view.App",
					"dependencies" : {
						"minUI5Version" : "1.28.0",
						"libs" : [ "sap.ui.core", "sap.m" ],
					},

					"config" : {
						"i18nBundle" : "sap.Bekon.i18n.i18n",
					// "serviceUrl": "service/data.json",
					//"sodcmpeUrl":"proxy/http/cep001.ct.com:8000/sap/opu/odata/sap/ZBEKON_TEST_SRV/ZSODCMPESet",
					//"riskUrl":"proxy/http/cep001.ct.com:8000/sap/opu/odata/sap/ZBEKON_TEST_SRV/ZRISKSet"
					},

					"routing" : {
						"config" : {
							"routerClass" : "sap.m.routing.Router",
							"viewType" : "XML",
							"viewPath" : "sap.Bekon.view",
							"controlId" : "app",
							"controlAggregation" : "pages",
							"transition" : "slide",
							"bypassed" : {
								"target" : "notFound"
							}
						},

						"routes" : [ {
							"pattern" : "",
							"name" : "notFound",
							"target" : "notFound"
						}, {
							"pattern" : "cockpit",
							"name" : "cockpit",
							"target" : "cockpit"
						}, {
							"pattern" : "berechtigungspruefung",
							"name" : "berechtigungspruefung",
							"target" : "berechtigungspruefung"
						}, {
							"pattern" : "minderungspruefung",
							"name" : "minderungspruefung",
							"target" : "minderungspruefung"
						}, {
							"pattern" : "risktable",
							"name" : "risktable",
							"target" : "risktable"
						}, {
							"pattern" : "zsodcmpe",
							"name" : "zsodcmpe",
							"target" : "zsodcmpe"
						}

						],

						"targets" : {
							"cockpit" : {
								"viewName" : "cockpit",
								"viewLevel" : 3
							},
							"berechtigungspruefung" : {
								"viewName" : "Berechtigungspruefung",
								"viewLevel" : 2
							},

							"minderungspruefung" : {
								"viewName" : "Minderungspruefung",
								"viewLevel" : 1
							},
							"notFound" : {
								"viewName" : "NotFound",
								"viewId" : "notFound"
							},
							"risktable" : {
								"viewName" : "riskTable",
								"viewId" : "risktable"
							},
							"zsodcmpe" : {
								"viewName" : "ZSODCMPE",
								"viewId" : "zsodcmpe"
							}
						}
					}
				},

				/**
				 * The component is initialized by UI5 automatically during the
				 * startup of the app and calls the init method once. In this
				 * function, the resource and application models are set and the
				 * router is initialized.
				 * 
				 * @public
				 * @override
				 */
				init : function() {
					// var that = this;
					var mConfig = this.getMetadata().getConfig();

					// call the base component's init function
					UIComponent.prototype.init.apply(this, arguments);

					// set the internationalization model
					this.setModel(new ResourceModel({
						bundleName : mConfig.i18nBundle
					}), "i18n");

					// create the views based on the url/hash
					this.getRouter().initialize();

				},

				/**
				 * In this function, the rootView is initialized and stored.
				 * 
				 * @public
				 * @override
				 * @returns {sap.ui.mvc.View} the root view of the component
				 */
				createContent : function() {

					// call the base component's createContent function
					var oRootView = UIComponent.prototype.createContent.apply(
							this, arguments);
					return oRootView;
				}
			});
		});