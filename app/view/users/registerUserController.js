Ext.define('TutorialApp.view.users.registerUserController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.register',
    config: {
        /*
            Uncomment to add references to view components
            refs: [{
                ref: 'list',
                selector: 'grid'
            }],
        */
        /*
            Uncomment to listen for events from view components
            control: {
                    'useredit button[action=save]': {
                    click: 'updateUser'
                }
            }
        */
    },
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
       Ext.widget('login');
   },
});