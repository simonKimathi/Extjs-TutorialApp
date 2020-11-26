Ext.define('TutorialApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    init: function () {},

    onLoginClick:function(){
   

        localStorage.setItem("LoggedIn", true);

        this.getView().destroy();

        Ext.widget('app-main');
    }

});