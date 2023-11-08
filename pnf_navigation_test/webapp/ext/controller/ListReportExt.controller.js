sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onSelectedRow: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
            var oApi = this.extensionAPI;   
            var oNavigationController = oApi.getNavigationController();   
            oNavigationController.navigateInternal("", {     routeName: "toCanvasPage"   });  
        }
    };
});