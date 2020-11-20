Ext.define('TutorialApp.view.users.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',
    mixins:[
        'TutorialApp.view.mixins.GridMixin'
    ],  
    init: function() {

    },
    
    onAddUserButtonClick: function() {
        Ext.create({
            xtype: 'userform'
        });
    },
    onViewUserDetailsButtonClick: function() {
        var me = this;

        var record = me.getSelectedRecord();
        if(record){
            var windowContainer = Ext.create({
                xtype:'userform'
            });
            windowContainer.lookupReference('form').getForm().loadRecord(record);
        }
    },
    onformDetailsButtonClick: function() {
        Ext.create({
            xtype:'formDetails'
        })
    }
})