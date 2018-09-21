sap.ui.define([
	"sap/ui/core/Control",
	"sap/ui/commons/Button"
], function (Control, Button) {
	"use strict";

	return Control.extend("sap.Bekon.control.Legend", {

		metadata: {
			properties: {
				titel: "string",
				style: "string",
				design: "string"
			},
			aggregations: {
				
				items: [
					{
						"type": "sap.ui.commons.Button",
						"multiple": true,
						"singularName": "item"
					},
					{
						"type": "sap.ui.commons.Label",
						"multiple": true,
						"singularName": "item"
					},
					{
						"type": "sap.ui.commons.DropdownBox",
						"multiple": true,
						"singularName": "item"
					},
					{
						"type": "sap.ui.commons.CheckBox",
						"multiple": true,
						"singularName": "item"
					},
					{
						"type": "sap.ui.commons.TextField",
						"multiple": true,
						"singularName": "item"
					}
					
				],
				_textfield:{
						"type": "sap.ui.commons.TextField"
				},
				_label:{
					"type": "sap.ui.commons.Label"
				},
				
				_button:{
							"type": "sap.ui.commons.Button"
						},
				_dropdownbox:{
					"type": "sap.ui.commons.DropdownBox"
				},
				_checkbox:{
					"type": "sap.ui.commons.CheckBox"
				}
			},
			events: {}
		},

		init: function () {
			
			this.addAggregation("_button",new sap.ui.commons.Button({
			}).addStyleClass("sapUiTinyMarginTopBottom"));
			this.addAggregation("_label",new sap.ui.commons.Label({
			}).addStyleClass("sapUiTinyMarginTopBottom"));
			this.addAggregation("_dropdownbox",new sap.ui.commons.DropdownBox({
			}).addStyleClass("sapUiTinyMarginTopBottom"));
			this.addAggregation("_checkbox",new sap.ui.commons.CheckBox({
			}).addStyleClass("sapUiTinyMarginTopBottom"));
			this.addAggregation("_textfield",new sap.ui.commons.TextField({
			}).addStyleClass("sapUiTinyMarginTopBottom"));
			//"sapUiTinyMarginTopBottom"
		},
		
		_onSubmit: function (oEvent) {
			
		},

		renderer: function (oRM, oControl) {
			oRM.write("<div ");
			oRM.write("style="); 
	        oRM.write("'");
	        //console.log(oControl.getStyle());
	        oRM.write(oControl.getStyle());
	        oRM.write("'");
	        oRM.write(">");
			oRM.write("<form>");
			oRM.write("<fieldset>");
			oRM.write("<legend>");
			oRM.write(oControl.getTitel());
			oRM.write("</legend>");
			oRM.writeClasses();
		$.each(oControl.getItems(), function(key,value){
			oRM.renderControl(value);
			if (key % 2 == 1){
				oRM.write("</br>");
				oRM.write("</br>");
			}
			
		});
		  	oRM.write(" </fieldset>");
			oRM.write("</form>");
            oRM.write("</div>");
		}
	});

});
