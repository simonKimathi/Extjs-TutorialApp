Ext.define('TutorialApp.view.posts.PostGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridcontroller',
    mixins: [
        'TutorialApp.view.mixins.GridMixin'
    ],
    /**
     * Called when the view is created
     */
    init: function () {
        this.getView().getStore().load();
    },
    onViewDetailsButtonClick: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            console.log(record);
        }
    },
    onAddComment: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            var window = Ext.create({
                xtype: 'commentform',
                viewModel: {
                    data: {
                        title: record.get('title'),
                        postId: record.get('id'),
                        firstName: 'John',
                        lastName: 'Odhiambo'
                    }
                }
            });
            // window.getViewModel().set('title',"New Comment");
            // window.getViewModel().set('postId',record.get('id'));
            window.show();
        }
    },
    onAddComment2: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
           Ext.create({
                xtype: 'postcommentswindow',
                viewModel: {
                    data: {
                        postId: record.get('id'),

                    }
                }
            });

        }
    }
});