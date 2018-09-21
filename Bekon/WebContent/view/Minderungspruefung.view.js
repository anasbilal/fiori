sap.ui.jsview("sap.Bekon.view.Minderungspruefung", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Minderungspruefung
	*/ 
	getControllerName : function() {
		return "sap.Bekon.controller.Minderungspruefung";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Minderungspruefung
	*/ 
	createContent : function(oController) {
 		/*return new sap.m.Page({
			title: "Title",
			content: [
			
			]
		});*/
		// Create JSON data model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({
			tcodes:[
					{tcode:"ES30", enabled:true},
					{tcode:"ES31", enabled:true},
					{tcode:"ES32", enabled:true},
					],
			rolle:[
					{rolle:"SAP_BC_ILM_SB", enabled:true},
					{rolle:"CEYONIQ_ARCHIVELINK_TEST", enabled:true},
					],
			mandante:[
						{mandt:"100", enabled:true},
						{mandt:"800", enabled:true},
						],
			systeme:[
				{device:"CEP", enabled:true},
				{device:"CC1", enabled:true},
				],
			editable: true
			//tooltip: "SAP-System-Identifikation"
				});
		sap.ui.getCore().setModel(oModel);
		
		var oLayout1 = new sap.ui.commons.layout.MatrixLayout("Matrix3", {columns: 2, width: "100%"});
		oLayout1.setWidths(['200px']);
		
		var oLabel1 = new sap.ui.commons.Label("LabelDropdown1",{ text: "SAP-System-Identifikation:", labelFor: oDropdownBox1});
		var oLabel2 = new sap.ui.commons.Label("LabelDropdown2",{ text: "Quellmandant:", labelFor: oDropdownBox2});
		var oLabel3 = new sap.ui.commons.Label("LabelDropdown3",{ text: "Benutzername:", labelFor: oDropdownBox3});
		var oLabel4 = new sap.ui.commons.Label("LabelDatepicker",{ text: "Aktuelles Datum:", labelFor: oDatePicker1});
		var oLabel5 = new sap.ui.commons.Label("LabelDropdown4",{ text: "Rolle:", labelFor: oDropdownBox4});
		var oLabel6 = new sap.ui.commons.Label("LabelDropdown5",{ text: "Transaktionscode1:", labelFor: oDropdownBox5});
		var oLabel7 = new sap.ui.commons.Label("LabelDropdown6",{ text: "Transaktionscode2:", labelFor: oDropdownBox6});
		var oLabel8 = new sap.ui.commons.Label("LabelInput1",{ text: "dringende Korrekturen:", labelFor: oInput1});

		// Create a DropdownBox for SAP-System-Identifikation
		var oDropdownBox1 = new sap.ui.commons.DropdownBox("DropdownBox1");
		oDropdownBox1.bindProperty("tooltip", "/tooltip");
		oDropdownBox1.bindProperty("editable", "/editable");
		oDropdownBox1.setModel(oModel);
		var oItemTemplate1 = new sap.ui.core.ListItem();
		oItemTemplate1.bindProperty("text", "device");
		oItemTemplate1.bindProperty("enabled", "enabled");
		oDropdownBox1.bindItems("/systeme", oItemTemplate1);
		
		// Create a DropdownBox for Quellmandant
		var oDropdownBox2 = new sap.ui.commons.DropdownBox("DropdownBox2");
		oDropdownBox2.bindProperty("tooltip", "/tooltip");
		oDropdownBox2.bindProperty("editable", "/editable");
		oDropdownBox2.setModel(oModel);
		var oItemTemplate2 = new sap.ui.core.ListItem();
		oItemTemplate2.bindProperty("text", "mandt");
		oItemTemplate2.bindProperty("enabled", "enabled");
		oDropdownBox2.bindItems("/mandante", oItemTemplate2);
		
		// Create a DropdownBox for Benutzername
		var oDropdownBox3 = new sap.ui.commons.DropdownBox("DropdownBox3");
		oDropdownBox3.bindProperty("tooltip", "/tooltip");
		oDropdownBox3.bindProperty("editable", "/editable");
		oDropdownBox3.setModel(oModel);
		var oItemTemplate3 = new sap.ui.core.ListItem();
		oItemTemplate3.bindProperty("text", "rolle");
		oItemTemplate3.bindProperty("enabled", "enabled");
		oDropdownBox3.bindItems("/rolle", oItemTemplate3);
		
		// Create a DropdownBox for Datum
		var oDatePicker1 = new sap.ui.commons.DatePicker('date1');
		
		oLayout1.createRow(oLabel1,oDropdownBox1);
		oLayout1.createRow(oLabel2,oDropdownBox2);
		oLayout1.createRow(oLabel3,oDropdownBox3);
		oLayout1.createRow(oLabel4,oDatePicker1);
		//oLayout1.addStyleClass("sapUiLargeMarginBegin");
		
		// Create a DropdownBox for Rolle
		var oDropdownBox4 = new sap.ui.commons.DropdownBox("DropdownBox4");
		oDropdownBox4.bindProperty("tooltip", "/tooltip");
		oDropdownBox4.bindProperty("editable", "/editable");
		oDropdownBox4.setModel(oModel);
		var oItemTemplate4 = new sap.ui.core.ListItem();
		oItemTemplate4.bindProperty("text", "rolle");
		oItemTemplate4.bindProperty("enabled", "enabled");
		oDropdownBox4.bindItems("/rolle", oItemTemplate4);
		
		// Create a DropdownBox for Transaktionscode1
		var oDropdownBox5 = new sap.ui.commons.DropdownBox("DropdownBox5");
		oDropdownBox5.bindProperty("tooltip", "/tooltip");
		oDropdownBox5.bindProperty("editable", "/editable");
		oDropdownBox5.setModel(oModel);
		var oItemTemplate5 = new sap.ui.core.ListItem();
		oItemTemplate5.bindProperty("text", "tcode");
		oItemTemplate5.bindProperty("enabled", "enabled");
		oDropdownBox5.bindItems("/tcodes", oItemTemplate5);
		
		// Create a DropdownBox for Transaktionscode2
		var oDropdownBox6 = new sap.ui.commons.DropdownBox("DropdownBox6");
		oDropdownBox6.bindProperty("tooltip", "/tooltip");
		oDropdownBox6.bindProperty("editable", "/editable");
		oDropdownBox6.setModel(oModel);
		var oItemTemplate6 = new sap.ui.core.ListItem();
		oItemTemplate6.bindProperty("text", "tcode");
		oItemTemplate6.bindProperty("enabled", "enabled");
		oDropdownBox6.bindItems("/tcodes", oItemTemplate6);
		
		// create a simple Input field
		var oInput1 = new sap.ui.commons.TextField('input1');
		//oInput1.setValue("Some Text");
		oInput1.setTooltip("dringende Korrekturen");
		//oInput1.attachChange(function(){alert('Text changed to :'+ oInput1.getValue());});
		
		oLayout1.createRow(oLabel5,oDropdownBox4);
		oLayout1.createRow(oLabel6,oDropdownBox5);
		oLayout1.createRow(oLabel7,oDropdownBox6);
		oLayout1.createRow(oLabel8,oInput1);
		oLayout1.addStyleClass("sapUiLargeMarginBegin");
		
		// Attach the DropdownBox to the page
		oLayout1.placeAt("content");
	}

});