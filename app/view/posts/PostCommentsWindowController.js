Ext.define('TutorialApp.view.posts.PostCommentsWindowController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postcommentswindowcontroller',
    init: function () {
        var me=this,
            window=me.getView();
       window.lookupReference('commentsgrid').getStore().reload({
            params:{
                postId:window.getViewModel().get('postId')
            }
        });
    }
});