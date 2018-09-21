sap.ui.jsview("sap.Bekon.view.Berechtigungspruefung", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.Berechtigungspruefung
	*/ 
	getControllerName : function() {
		return "sap.Bekon.controller.Berechtigungspruefung";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.Berechtigungspruefung
	*/ 
	createContent : function(oController) {
 		/*return new sap.m.Page({
			title: "Berechtigungspruefung",
			content: [
			
			]
		});*/
		// Create JSON data model
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData({
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
			editable: true,
			tooltip: "SAP-System-Identifikation"});
		sap.ui.getCore().setModel(oModel);
		
		var oLayout1 = new sap.ui.commons.layout.MatrixLayout("Matrix2", {columns: 2, width: "100%"});
		oLayout1.setWidths(['200px']);
		
		var oLabel1 = new sap.ui.commons.Label("LabelDropdown1",{ text: "SAP-System-Identifikation:", labelFor: oDropdownBox1});
		var oLabel2 = new sap.ui.commons.Label("LabelDropdown2",{ text: "Quellmandant:", labelFor: oDropdownBox2});
		var oLabel3 = new sap.ui.commons.Label("LabelDropdown3",{ text: "Rolle:", labelFor: oDropdownBox3});
		var oLabel4 = new sap.ui.commons.Label("LabelDropdown4",{ text: "Modul:", labelFor: oDropdownBox4});

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
		
		// Create a DropdownBox for Rolle
		var oDropdownBox3 = new sap.ui.commons.DropdownBox("DropdownBox3");
		oDropdownBox3.bindProperty("tooltip", "/tooltip");
		oDropdownBox3.bindProperty("editable", "/editable");
		oDropdownBox3.setModel(oModel);
		var oItemTemplate3 = new sap.ui.core.ListItem();
		oItemTemplate3.bindProperty("text", "rolle");
		oItemTemplate3.bindProperty("enabled", "enabled");
		oDropdownBox3.bindItems("/rolle", oItemTemplate3);
		
		// Create a DropdownBox for Modul
		var oDropdownBox4 = new sap.ui.commons.DropdownBox("DropdownBox4");
		oDropdownBox4.bindProperty("tooltip", "/tooltip");
		oDropdownBox4.bindProperty("editable", "/editable");
		oDropdownBox4.setModel(oModel);
		var oItemTemplate4 = new sap.ui.core.ListItem();
		oItemTemplate4.bindProperty("text", "modul");
		oItemTemplate4.bindProperty("enabled", "enabled");
		oDropdownBox4.bindItems("/module", oItemTemplate4);
		
		oLayout1.createRow(oLabel1,oDropdownBox1);
		oLayout1.createRow(oLabel2,oDropdownBox2);
		oLayout1.createRow(oLabel3,oDropdownBox3);
		oLayout1.createRow(oLabel4,oDropdownBox4);
		oLayout1.addStyleClass("sapUiLargeMarginBegin");
		
		var oLabel1 = new sap.m.Label("lbl1", {text:'Rollenebene',design: "Bold"});
		//oLabel1.addStyleClass("sapUiLargeMarginBegin");
		
		var oLabel2 = new sap.m.Label("lbl2", {text:'Anwenderebene',design: "Bold"});
		//oLabel2.addStyleClass("sapUiLargeMarginBegin");
		
		var oLabel3 = new sap.m.Label("lbl3", {text:'Nutzungsebene',design: "Bold"});
		//oLabel3.addStyleClass("sapUiLargeMarginBegin");
		
		// create a simple button with some text and a tooltip only
		var oButton1 = new sap.ui.commons.Button({
			text : "Pruefungen Rollen",
			width: "200px",
			tooltip : "Pruefungen Rollen",
			press : function() {alert('Alert from ' + oButton1.getText());}
		});
		
		// create a simple button with some text and a tooltip only
		var oButton2 = new sap.ui.commons.Button({
			text : "Pruefungen Anwender",
			width: "200px",
			tooltip : "Pruefungen Anwender",
			press : function() {alert('Alert from ' + oButton2.getText());}
		});
		
		// create a simple button with some text and a tooltip only
		var oButton3 = new sap.ui.commons.Button({
			text : "Pruefungen Nutzung",
			width: "200px",
			tooltip : "Pruefungen Nutzung",
			press : function() {alert('Alert from ' + oButton3.getText());}
		});
		oLayout1.createRow(oLabel1);
		oLayout1.createRow(oButton1);
		oLayout1.createRow(oLabel2);
		oLayout1.createRow(oButton2);
		oLayout1.createRow(oLabel3);
		oLayout1.createRow(oButton3);

		// Attach the DropdownBox to the page
		oLayout1.placeAt("content");
	}

});