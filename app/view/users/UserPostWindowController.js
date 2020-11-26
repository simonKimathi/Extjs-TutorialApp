Ext.define('TutorialApp.view.users.UserPostWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userpostwindowcontroller',
    init: function () {
        var me=this,
            window=me.getView();
       window.lookupReference('postgrid').getStore().reload({
            params:{
                userId:window.getViewModel().get('userId')
            }
        });
    }
});