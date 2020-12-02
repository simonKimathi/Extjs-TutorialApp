Ext.define('TutorialApp.view.users.UserFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userformcontroller',
 
    init: function() {},
    onUserFormSubmit:function(){
        var me = this;
        form = me.getView().lookupReference('form').getForm();
        console.log(form.getValues());
        var id = form.findField('id').getValue();
        console.log(id);
        var method = 'POST';
        var url = 'http://localhost:8080/TrainingApp/api/users/editUser';
        if (id) {
            method = 'PUT';
            url = url
        }
        if (form.isValid()) {
            form.submit({
                url: 'http://localhost:8080/TrainingApp/api/users',
                method: method,

                success: function(form, action) {

                    if (id) {
                        //update
                        console.log(action.result);
                    } else {
                        // creation process so we have to add this record to the store
                        console.log(action.result);
                        var store = Ext.ComponentQuery.query('usergrid')[0].getStore();
                        store.loadRawData(action.result);
                        console.log(store.getCount());
                    }
                },
                failure: function(form, action) {
                    console.log(action.result);
                }
            });
        }
    },
    onUserFormCancel:function(){
        this.getView.close();
    }
});