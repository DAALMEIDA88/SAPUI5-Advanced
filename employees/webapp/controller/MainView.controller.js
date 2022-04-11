sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.employees.controller.MainView", {
            onInit: function () {

            },

            onValidate: function () {
                var inputEmpployee = this.byId("inputEmployee");
                var valueEmployee = inputEmpployee.getValue();

                if (valueEmployee.length === 6) {
                    //inputEmpployee.setDescription("OK");
                    this.byId("labelCountry").setVisible(true);
                    this.byId("slCountry").setVisible(true);
                } else {
                    this.byId("labelCountry").setVisible(false);
                    this.byId("slCountry").setVisible(false);
                }
            }
        });
    });
