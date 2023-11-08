sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    'use strict';
    return Controller.extend("pnfnavigationtest.Comp2.controller.Detail",{
        onInit: function(){
            MessageToast.show("Controller is called");
            console.log("hello");
        },


        onPress: function(){


        }
    })
}); 