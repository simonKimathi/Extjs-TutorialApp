Ext.define('TutorialApp.view.comments.CommentFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.commentformcontroller',


    onSaveButtonClick: function () {

        var me = this,
            window = me.getView(),
            form = window.lookupReference('form').getForm();
        console.log( this.getView().getViewModel().get('postId'));
        console.log(window.getViewModel().get('title'));
        if (form.isValid()) {
            form.submit({
                url: 'https://jsonplaceholder.typicode.com/comments',
                waitMsg:'please wait...',
                success: function (form, action) {
                        console.log(action.result);
                },
                failure: function (form, action) {
                    console.log(action.result);
                }
            });
        }

    },
    onCancelButtonClick: function () {
        var me = this,
            window = me.getView();
        window.close();
    },
});