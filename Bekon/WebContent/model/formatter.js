sap.ui.define([], function() {
	"use strict";
	return {

		/**
		 * Formats a given string to uppercase.
		 * 
		 * @function
		 * @param {string}
		 *            sName string to be formatted
		 * @public
		 */
		formatUpperCase : function(sName) {
			return sName && sName.toUpperCase();
		},
		formatDate : function(sErdat) {
			var begin = sErdat.indexOf("(");
			begin = begin+1;
			var res = sErdat.substring(begin,19);
			var d = parseInt(res); 
			//var formatDate = new Date(1530576000000);
			sErdat = new Date(d);
			var jahr=sErdat.getFullYear();
			var monat=sErdat.getMonth() + 1;
			var tag=sErdat.getDay() + 1;
			var datum= tag+'-'+monat+'-'+jahr;
			console.log(sErdat);
			sErdat=datum;
			return sErdat;

		}
	};

});