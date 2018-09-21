sap.ui.jsview("sap.Bekon.view.ZSODCMPE", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demotable.ZSODCMPE
	*/ 
	getControllerName : function() {
		return "sap.Bekon.controller.ZSODCMPE";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demotable.ZSODCMPE
	*/ 
	createContent : function(oController) {
		var oTable = null;
		oTable = new sap.m.Table("idList", {
	
			itemPress: oController.onListItemPressed,
			inset : true,
			headerText : "SoD compare Funktionsueberschneidungen Tcodes und Objekte",
			headerDesign : sap.m.ListHeaderDesign.Standard,
			mode : sap.m.ListMode.SingleSelectMaster,
			includeItemInSelection : false
			
		});

		var col1 = new sap.m.Column("col1", {
			width: "100px",	
			sortProperty: "Lfnum",    
		    filterProperty: "Lfnum",
			header : new sap.m.Label({
			text : "Lfnum"
			})
		});
		oTable.addColumn(col1);
		
		var col2 = new sap.m.Column("col2", {
			width: "100px",	
			sortProperty: "Mod",    
		    filterProperty: "Mod",
			header : new sap.m.Label({
			text : "Mod"
			})
		});
		
		oTable.addColumn(col2);
		
		var col3 = new sap.m.Column("col3", {
			width: "100px",	
			sortProperty: "Tcode1",    
		    filterProperty: "Tcode1",
			header : new sap.m.Label({
			text : "Tcode1"
			})
		});
		oTable.addColumn(col3);
		
		var col4 = new sap.m.Column("col4", {
			width: "100px",
			sortProperty: "Object1",    
		    filterProperty: "Object1",
			header : new sap.m.Label({
			text : "Object1"
			})
		});
		oTable.addColumn(col4);
		
		var col5 = new sap.m.Column("col5", {
			width: "100px",	
			sortProperty: "Field1",    
		    filterProperty: "Field1",
			header : new sap.m.Label({
			text : "Field1"
			})
		});
		oTable.addColumn(col5);
		
		var col6 = new sap.m.Column("col6", {
			width: "50px",	
			sortProperty: "Low1",    
		    filterProperty: "Low1",
			header : new sap.m.Label({
			text : "Low1"
			})
		});
		oTable.addColumn(col6);
		
		var col7 = new sap.m.Column("col7", {
			width: "70px",	
			sortProperty: "Tcode2",    
		    filterProperty: "Tcode2",
			header : new sap.m.Label({
			text : "Tcode2"
			})
		});
		oTable.addColumn(col7);
		
		var col8 = new sap.m.Column("col8", {
			width: "100px",
			sortProperty: "Object2",    
		    filterProperty: "Object2",
			header : new sap.m.Label({
			text : "Object2"
			})
		});
		oTable.addColumn(col8);
		
		var col9 = new sap.m.Column("col9", {
			width: "100px",
			sortProperty: "Field2",    
		    filterProperty: "Field2", 
			header : new sap.m.Label({
				text : "Field2"
			})
		});
		oTable.addColumn(col9);
		
		var col10 = new sap.m.Column("col10", {
			width: "50px",	
			sortProperty: "Low2",    
		    filterProperty: "Low2",
			header : new sap.m.Label({
			text : "Low2"
			})
		});
		oTable.addColumn(col10);
		
		var col11 = new sap.m.Column("col11", {
			id  : "col1",
			width: "100px",	
			sortProperty: "Riskid",    
		    filterProperty: "Riskid",
			header : new sap.m.Label({
			text : "Riskid"
			})
		});
		oTable.addColumn(col11);
		
		/*var col20 = new sap.m.Column("col20", {
			width: "100px",	
			sortProperty: "Risktext",    
		    filterProperty: "Risktext",
			header : new sap.m.Label({
			text : "Risktext"
			})
		});
		oTable.addColumn(col20);*/
		
		var col12 = new sap.m.Column("col12", {
			width: "50px",	
			sortProperty: "Prio",    
		    filterProperty: "Prio",
			header : new sap.m.Label({
			text : "Prio"
			})
		});
		oTable.addColumn(col12);
		
		var col13 = new sap.m.Column("col13", {
			width: "100px",	
			sortProperty: "Inact",    
		    filterProperty: "Inact",
			header : new sap.m.Label({
			text : "Inact"
			})
		});
		oTable.addColumn(col13);
		
		var col14 = new sap.m.Column("col14", {
			width: "100px",	
			sortProperty: "Note",    
		    filterProperty: "Note",
			header : new sap.m.Label({
			text : "Note"
			})
		});
		oTable.addColumn(col14);
		
		/*var col15 = new sap.m.Column("col15", {
			width: "100px",	
			sortProperty: "Resp",    
		    filterProperty: "Resp",
			header : new sap.m.Label({
			text : "Resp"
			})
		});
		oTable.addColumn(col15);
		
		var col16 = new sap.m.Column("col16", {
			width: "100px",	
			sortProperty: "Erdat",    
		    filterProperty: "Erdat",
			header : new sap.m.Label({
			text : "Erdat"
			})
		});
		oTable.addColumn(col16);
		
		var col17 = new sap.m.Column("col17", {
			width: "100px",	
			sortProperty: "Ername",    
		    filterProperty: "Ername",
			header : new sap.m.Label({
			text : "Ername"
			})
		});
		oTable.addColumn(col17);
		
		var col18 = new sap.m.Column("col18", {
			width: "100px",	
			sortProperty: "Aedat",    
		    filterProperty: "Aedat",
			header : new sap.m.Label({
			text : "Aedat"
			})
		});
		oTable.addColumn(col18);
		
		var col19 = new sap.m.Column("col19", {
			width: "100px",	
			sortProperty: "Aename",    
		    filterProperty: "Aename",
			header : new sap.m.Label({
			text : "Aename"
			})
		});
		oTable.addColumn(col19);*/
		
		
		var colItems = new sap.m.ColumnListItem("colItems", {
			type : "Active"
		});
		oTable.bindAggregation("items", "sodcmpe>/d/results", colItems);
		var txtNAME = new sap.m.Text("txtNAME", {
			text : "{sodcmpe>Lfnum}"
		});
		colItems.addCell(txtNAME);

		var txtNAME2 = new sap.m.Text("txtNAME2", {
			text : "{sodcmpe>Mod}"
		});
		colItems.addCell(txtNAME2);
		
		var txtNAME3 = new sap.m.Text("txtNAME3", {
			text : "{sodcmpe>Tcode1}"
		});
		colItems.addCell(txtNAME3);
		
		var txtNAME4 = new sap.m.Text("txtNAME4", {
			text : "{sodcmpe>Object1}"
		});
		colItems.addCell(txtNAME4);
		
		var txtNAME5 = new sap.m.Text("txtNAME5", {
			text : "{sodcmpe>Field1}"
		});
		colItems.addCell(txtNAME5);
		
		var txtNAME6 = new sap.m.Text("txtNAME6", {
			text : "{sodcmpe>Low1}"
		});
		colItems.addCell(txtNAME6);
		
		var txtNAME7 = new sap.m.Text("txtNAME7", {
			text : "{sodcmpe>Tcode2}"
		});
		colItems.addCell(txtNAME7);
		
		var txtNAME8 = new sap.m.Text("txtNAME8", {
			text : "{sodcmpe>Object2}"
		});
		colItems.addCell(txtNAME8);
		
		var txtNAME9 = new sap.m.Text("txtNAME9", {
			text : "{sodcmpe>Field2}"
		});
		colItems.addCell(txtNAME9);
		
		var txtNAME10 = new sap.m.Text("txtNAME10", {
			text : "{sodcmpe>Low2}"
		});
		colItems.addCell(txtNAME10);
		
		var txtNAME11 = new sap.m.Text("txtNAME11", {
			text : "{sodcmpe>Riskid}"
		});
		colItems.addCell(txtNAME11);
		
		/*var txtNAME20 = new sap.m.Text("txtNAME20", {
			text : "{Risktext}"
		});
		colItems.addCell(txtNAME20);*/
		
		var txtNAME12 = new sap.m.Text("txtNAME12", {
			text : "{sodcmpe>Prio}"
		});
		colItems.addCell(txtNAME12);
		
		var txtNAME13 = new sap.m.Text("txtNAME13", {
			text : "{sodcmpe>Inact}"
		});
		colItems.addCell(txtNAME13);
		
		var txtNAME14 = new sap.m.Text("txtNAME14", {
			text : "{sodcmpe>Note}"
		});
		colItems.addCell(txtNAME14);
		
		/*var txtNAME15 = new sap.m.Text("txtNAME15", {
			text : "{Resp}"
		});
		colItems.addCell(txtNAME15);
		
		var txtNAME16 = new sap.m.Text("txtNAME16", {
			text : "{Erdat}"
		});
		colItems.addCell(txtNAME16);
		
		var txtNAME17 = new sap.m.Text("txtNAME17", {
			text : "{Ername}"
		});
		colItems.addCell(txtNAME17);
		
		var txtNAME18 = new sap.m.Text("txtNAME18", {
			text : "{Aedat}"
		});
		colItems.addCell(txtNAME18);
		
		var txtNAME19 = new sap.m.Text("txtNAME19", {
			text : "{Aenam}"
		});
		colItems.addCell(txtNAME19);*/
		
		
		return new sap.m.Page({
			title : "SoD compare Funktionsueberschneidungen Tcodes und Objekte",
			content : [ oTable ]
		});
	}

});