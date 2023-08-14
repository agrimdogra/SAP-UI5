sap.ui.define([

], function(require, factory) {
    'use strict';
    
    return{
        createJsonModel : function(){
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData(
                {
                
                    "Agrim" : {
                        "name" : "Agrim",
                        "age"     : 26,
                        "id"      : 1569,
                        "country" : "Australia",
                        "smoker"  : false  
                    },

                    "Arundhti" : {
                        "name"    : "Arundhti Dogra",
                        "age"     : 20,
                        "id"      : 1001,
                        "country" : "India",
                        "smoker"  : false 
                    }
                }
            
            );

            return oModel;
        }
    }
});