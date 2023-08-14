sap.ui.jsview("myApp.view.Main", {

    getControllerName(){
        return "myApp.controller.main";
    },

    createContent: function(oControler){
        var oBtn = new sap.m.Button("myButton", {
            text: "Press Me",
            press: oControler.ClickMe    
        })

        var oInput = new sap.m.Input("myField", {
            maxLength : 5
        })

        return [oInput,oBtn];
    }
});