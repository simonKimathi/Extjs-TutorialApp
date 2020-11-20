Ext.define('TutorialApp.view.posts.PostGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridcontroller',
    mixins:[
        'TutorialApp.view.mixins.GridMixin'
    ],
    init: function() {
        this.getView().getStore().load();

    },
   
    onAddPostButtonClick: function() {
        Ext.create({
            xtype: 'postform'
        });
    },
    onViewPostDetailsButtonClick: function() {
        var me = this;

        var record = me.getSelectedRecord();
        if(record){
            var windowContainer = Ext.create({
                xtype:'postform'
            });
            windowContainer.lookupReference('pform').getForm().loadRecord(record);
        }
    }
})