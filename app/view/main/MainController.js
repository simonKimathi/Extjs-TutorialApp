/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('TutorialApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    onLogoutClickButton: function () {

        // Remove the localStorage key/value
        localStorage.removeItem('LoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('login');

    },

    onItemSelected: function (sender, record) {
        Ext.create({
            xtype: 'form-register'
        });
    },
    onLogoutClick :function(){
        // Remove the localStorage key/value
        localStorage.removeItem('LoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.widget('login');

    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
