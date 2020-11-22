Ext.define('TutorialApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    /**
     * Called when the view is created
     */
    init: function () {},

    onLoginClick:function(){
         // This would be the ideal location to verify the user's credentials via

        // Set the localStorage value to true
        localStorage.setItem("TutorialLoggedIn", true);

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.widget('app-main');
    },

    onSignupClick:function(){

        // Remove Login Window
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.create({
            xtype:'register'
    })
}

});