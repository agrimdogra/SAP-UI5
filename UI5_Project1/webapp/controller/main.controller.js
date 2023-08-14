sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("myApp.controller.main", {
        ClickMe: function(){
            alert("Hello Welcome to MVC " + sap.ui.getCore().byId("myField").getValue());
        },
        myFun(){
            this.getView("idMain2").byId("inpId").setValue("Hello this is Agrim from XML view");
        }
    });
});