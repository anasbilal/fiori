sap.ui.jsview("sap.Bekon.view.cockpit", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf view.cockpit
	*/ 
	getControllerName : function() {
		return "sap.Bekon.controller.cockpit";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf view.cockpit
	*/ 
	createContent : function(oController) {
		
		// Create a TabStrip instance
		var oTabStrip1 = new sap.ui.commons.TabStrip("TabStrip1");
		oTabStrip1.setWidth("600px");
		oTabStrip1.setHeight("450px");
		oTabStrip1.setEnableTabReordering(true);
		oTabStrip1.attachClose( function (oEvent) {
			var oTabStrip = oEvent.oSource;
			oTabStrip.closeTab(oEvent.getParameter("index"));
		});

		// 1. tab: general data (use createTab)
		
		oTab1 = new sap.ui.commons.Tab("tab1");
		oTab1.setTooltip("Auswertung");
		oTab1.setTitle(new sap.ui.core.Title("Title1",{text:"Auswertung",icon:""}));
		var oLayout1 = new sap.ui.commons.layout.MatrixLayout("Matrix1", {columns: 2, width: "100%"});
		oLayout1.setWidths(['150px']);
		
		// create a simple button with some text and a tooltip only
		var oButton1 = new sap.ui.commons.Button({
			//style: sap.ui.commons.ButtonStyle.Reject,
			text : "Berechtigungspruefung",
			//width: "200px",
			tooltip : "Berechtigungspruefung",
			press : oController.onPressBtn1
		});
		
		// create a simple button with some text and a tooltip only
		var oButton2 = new sap.ui.commons.Button({
			text : "Uebergangene Minderung pruefen",
			//width: "200px",
			tooltip : "Uebergangene Minderung pruefen",
			press : function() {alert('Alert from ' + oButton2.getText());}
		});
		oLayout1.createRow(oButton1,oButton2);
		//oLayout1.createRow(oButton2);
				
		oTab1.addContent(oLayout1);
		oTabStrip1.addTab(oTab1);
		
		//oTabStrip1.createTab("Auswertung",oLayout1);
		//oTabStrip1.setTooltip("Auswertung");

		// 2. tab: Statistikdaten (use separate tab element)
		oTab2 = new sap.ui.commons.Tab("tab2");
		oTab2.setTooltip("Statistikdaten");
		oTab2.setTitle(new sap.ui.core.Title("Title2",{text:"Statistikdaten",icon:""}));

		var oLayout2 = new sap.ui.commons.layout.MatrixLayout("Matrix2", {columns: 2, width: "100%"});
		oLayout2.setWidths(['150px']);
		
		// create a simple button with some text and a tooltip only
		var oButton3 = new sap.ui.commons.Button({
			text : "Nutzungsstatistik laden",
			//width: "200px",
			tooltip : "Nutzungsstatistik laden",
			press : function() {alert('Alert from ' + oButton3.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton4 = new sap.ui.commons.Button({
			text : "Nutzungsstatistik loeschen",
			//width: "200px",
			tooltip : "Nutzungsstatistik loeschen",
			press : function() {alert('Alert from ' + oButton4.getText());}
		});
		oLayout2.createRow(oButton3,oButton4);
		//oLayout2.createRow(oButton4);

		oTab2.addContent(oLayout2);
		//oTabStrip1.addTab(oTab2);
		
		// 2. tab: Pflege Customizingtabellen (use separate tab element)
		oTab3 = new sap.ui.commons.Tab("tab3");
		oTab3.setTooltip("Pflege Customizingtabellen");
		oTab3.setTitle(new sap.ui.core.Title("Title3",{text:"Pflege Customizingtabellen",icon:""}));

		var oLayout3 = new sap.ui.commons.layout.MatrixLayout("Matrix3", {columns: 2, width: "100%"});
		oLayout3.setWidths(['400px']);
		
		/*var oLabel1 = new sap.m.Label("lbl1", {text:'Minderungstabellen',design: "Bold"});
		oLabel1.addStyleClass("sapUiLargeMarginBegin").addStyleClass("sapUiFTV");
				
		var oLabel2 = new sap.m.Label("lbl2", {text:'Pruefkriterien',design: "Bold"});
		oLabel2.addStyleClass("sapUiLargeMarginBegin").addStyleClass("sapUiFTV");*/
		
		// create a simple button with some text and a tooltip only
		var oButton5 = new sap.ui.commons.Button({
			text : "Minderungsgruende",
			//width: "400px",
			tooltip : "Minderungsgruende",
			press : function() {alert('Alert from ' + oButton5.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton6 = new sap.ui.commons.Button({
			text : "Minderungsverantwortliche",
			//width: "400px",
			tooltip : "Minderungsverantwortliche",
			press : function() {alert('Alert from ' + oButton6.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton7 = new sap.ui.commons.Button({
			text : "Risikominderung Rollenebene",
			//width: "400px",
			tooltip : "Risikominderung Rollenebene",
			press : function() {alert('Alert from ' + oButton7.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton8 = new sap.ui.commons.Button({
			text : "Risikominderung Tcode-Kombinationen Nutzerebene",
			//width: "400px",
			tooltip : "Risikominderung TCode-Kombinationen Nutzerebene",
			press : function() {alert('Alert from ' + oButton8.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton9 = new sap.ui.commons.Button({
			text : "Risikominderung TCodes Nutzerebene",
			//width: "400px",
			tooltip : "Risikominderung TCodes Nutzerebene",
			press : function() {alert('Alert from ' + oButton9.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton10 = new sap.ui.commons.Button({
			text : "Risiken",
			//width: "400px",
			tooltip : "Risiken",
			press : function() {alert('Alert from ' + oButton10.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton11 = new sap.ui.commons.Button({
			text : "Kritische Objekte",
			//width: "400px",
			tooltip : "Kritische Objekte",
			press : function() {alert('Alert from ' + oButton11.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton12 = new sap.ui.commons.Button({
			text : "Kritische Transaktionen",
			//width: "400px",
			tooltip : "Kritische Transaktionen",
			press : function() {alert('Alert from ' + oButton12.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton13 = new sap.ui.commons.Button({
			text : "Funktionsueberschneidungen",
			//width: "400px",
			tooltip : "Funktionsueberschneidungen",
			press : function() {alert('Alert from ' + oButton13.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton14 = new sap.ui.commons.Button({
			text : "Funktionsueberschneidungen mit Objekten",
			//width: "400px",
			tooltip : "Funktionsueberschneidungen mit Objekten",
			press : function() {alert('Alert from ' + oButton14.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton15 = new sap.ui.commons.Button({
			text : "Kritische Profile",
			//width: "400px",
			tooltip : "Kritische Profile",
			press : function() {alert('Alert from ' + oButton15.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton151 = new sap.ui.commons.Button({
			text : "Kritische Rollen",
			//width: "400px",
			tooltip : "Kritische Rollen",
			press : function() {alert('Alert from ' + oButton151.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton152 = new sap.ui.commons.Button({
			text : "Zulaessige RFC-Ziele",
			//width: "400px",
			tooltip : "Zulaessige RFC-Ziele",
			press : function() {alert('Alert from ' + oButton152.getText());}
		});
		/*oLayout3.createRow(oLabel1);
		oLayout3.createRow(oButton5,oButton6);
		oLayout3.createRow(oButton7,oButton8);
		oLayout3.createRow(oButton9);
		oLayout3.createRow(oLabel2);
		oLayout3.createRow(oButton10,oButton11);
		oLayout3.createRow(oButton12,oButton13);
		oLayout3.createRow(oButton14,oButton15);*/
		var oLegend1 = new sap.Bekon.control.Legend("legend1",{
			items: [oButton5,oButton6,oButton7,oButton8,oButton9],
			titel: "Minderungstabellen"
			
		});
		var oLegend2 = new sap.Bekon.control.Legend("legend2",{
			items: [oButton10,oButton11,oButton12,oButton13,oButton14,oButton15,oButton151,oButton152],
			titel: "Pruefkriterien"
			
		});
		oLayout3.createRow(oLegend1);
		oLayout3.createRow(oLegend2);
		oTab3.addContent(oLayout3);
		oTabStrip1.addTab(oTab3);
		
		// 2. tab: Pflege Customizingtabellen (use separate tab element)
		oTab4 = new sap.ui.commons.Tab("tab4");
		oTab4.setTooltip("Upload der Prueftabellen");
		oTab4.setTitle(new sap.ui.core.Title("Title4",{text:"Upload der Prueftabellen",icon:""}));

		var oLayout4 = new sap.ui.commons.layout.MatrixLayout("Matrix4", {columns: 2, width: "100%"});
		//oLayout4.setWidths(['250px']);
		// create a simple button with some text and a tooltip only
		var oButton16 = new sap.ui.commons.Button({
			text : "Risikobeschreibung Risiko-ID",
			//width: "400px",
			tooltip : "Risikobeschreibung Risiko-ID",
			press : function() {alert('Alert from ' + oButton16.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton17 = new sap.ui.commons.Button({
			text : "Kritische Transaktionscodes",
			//width: "400px",
			tooltip : "Kritische Transaktionscodes",
			press : function() {alert('Alert from ' + oButton17.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton18 = new sap.ui.commons.Button({
			text : "Kritische Objekte",
			//width: "400px",
			tooltip : "Kritische Objekte",
			press : function() {alert('Alert from ' + oButton18.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton19 = new sap.ui.commons.Button({
			text : "Kritische Funktionsueberschneidungen(SoD)",
			//width: "400px",
			tooltip : "Kritische Funktionsueberschneidungen(SoD)",
			press : function() {alert('Alert from ' + oButton19.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton20 = new sap.ui.commons.Button({
			text : "Kritische Funktionsueberschneidungen mit Objekten",
			//width: "400px",
			tooltip : "Kritische Funktionsueberschneidungen mit Objekten",
			press : function() {alert('Alert from ' + oButton20.getText());}
		});
		// create a simple button with some text and a tooltip only
		var oButton21 = new sap.ui.commons.Button({
			text : "Upload Berechtigungsdaten aus Backend",
			//width: "400px",
			tooltip : "Upload Berechtigungsdaten aus Backend",
			press : function() {alert('Alert from ' + oButton21.getText());}
		});
		oLayout4.createRow(oButton16,oButton17);
		oLayout4.createRow(oButton18,oButton19);
		oLayout4.createRow(oButton20,oButton21);
						
		oTab4.addContent(oLayout4);
		oTabStrip1.addTab(oTab4);
		oTabStrip1.addTab(oTab2);
		oTabStrip1.addStyleClass("sapUiLargeMarginBegin");
		
		// Attach the TabStrip to the page
		oTabStrip1.placeAt("content");
		//oLayout1.placeAt("content");
	}

});