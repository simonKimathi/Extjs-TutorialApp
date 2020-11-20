Ext.define('TutorialApp.view.users.formDetailsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.formDetailscontroller',
 
    init: function() {},
    submitForm:function(){
        var me = this;
        form = me.getView().lookupReference('form').getForm();
        console.log(form.getValues());
    }
});