/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('TutorialApp.Application', {
    extend: 'Ext.app.Application',

    name: 'TutorialApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch: function () {

   
        var loggedIn;

       
        loggedIn = localStorage.getItem("LoggedIn");

        Ext.widget(loggedIn ? 'app-main' : 'login');

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
