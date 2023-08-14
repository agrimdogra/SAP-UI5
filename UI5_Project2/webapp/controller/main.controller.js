sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'myApp2/models/model'
], function(Controller, Model) {
    'use strict';
    return Controller.extend("myApp2.controller.main",{
        onInit: function(){
            var oModel = Model.createJsonModel();
            sap.ui.getCore().setModel(oModel);

        },


        onPress: function(){
            // Change the value of name to Agrim Dogra
            var currView = this.getView();    

            var oModel = sap.ui.getCore().getModel();
            oModel.setProperty("/Arundhti/name","Dograag");

        }
    })
}); 