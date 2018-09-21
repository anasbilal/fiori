sap.ui.jsview("sap.Bekon.view.riskTable", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demotable.riskTable
	*/ 
	getControllerName : function() {
		return "sap.Bekon.controller.riskTable";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demotable.riskTable
	*/ 
	createContent : function(oController) {
		var oTable = new sap.m.Table("idList", {
			inset : true,
			headerText : "List of Risks",
			headerDesign : sap.m.ListHeaderDesign.Standard,
			mode : sap.m.ListMode.None,
			includeItemInSelection : false,
		});

		var col1 = new sap.m.Column("col1", {
			header : new sap.m.Label({
				text : "Risk ID"
			})
		});
		oTable.addColumn(col1);
		
		var col2 = new sap.m.Column("col2", {
			header : new sap.m.Label({
				text : "Risktext"
			})
		});
		oTable.addColumn(col2);
		
		var col3 = new sap.m.Column("col3", {
			header : new sap.m.Label({
				text : "Erdat"
			})
		});
		oTable.addColumn(col3);
		
		var col4 = new sap.m.Column("col4", {
			header : new sap.m.Label({
				text : "Ername"
			})
		});
		oTable.addColumn(col4);
		
		var col5 = new sap.m.Column("col5", {
			header : new sap.m.Label({
				text : "Aedat"
			})
		});
		oTable.addColumn(col5);
		
		var col6 = new sap.m.Column("col6", {
			header : new sap.m.Label({
				text : "Aename"
			})
		});
		oTable.addColumn(col6);
		
		var colItems = new sap.m.ColumnListItem("colItems", {
			type : "Active"
		});
		oTable.bindAggregation("items", "risk>/d/results", colItems);
		var txtNAME = new sap.m.Text("txtNAME", {
			text : "{risk>Riskid}"
		});
		colItems.addCell(txtNAME);

		var txtNAME2 = new sap.m.Text("txtNAME2", {
			text : "{risk>Risktext}"
		});
		colItems.addCell(txtNAME2);
		
		var txtNAME3 = new sap.m.Text("txtNAME3", {
			text : "{risk>Erdat}"
		});
		colItems.addCell(txtNAME3);
		
		var txtNAME4 = new sap.m.Text("txtNAME4", {
			text : "{risk>Ername}"
		});
		colItems.addCell(txtNAME4);
		
		var txtNAME5 = new sap.m.Text("txtNAME5", {
			text : "{Aedat}"
		});
		colItems.addCell(txtNAME5);
		
		var txtNAME6 = new sap.m.Text("txtNAME6", {
			text : "{risk>Aenam}"
		});
		colItems.addCell(txtNAME6);
		
		return new sap.m.Page({
			title : "Title",
			content : [ oTable ]
		});
	
	}

});