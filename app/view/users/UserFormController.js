Ext.define('TutorialApp.view.users.UserFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userformcontroller',
 
    init: function() {},
    onUserFormSubmit:function(){
        var me = this;
        form = me.getView().lookupReference('form').getForm();
        var id=form.findField('id').getValue();
        var method='POST';
        if(form.isValid()){
            form.submit({
                url:'https://jsonplaceholder.typicode.com/users',

                //method:id===undefined? 'POST':"PUT",
                if (id) {
                    method='PUT';
                },


                success:function(form,action){
                    if(id){
                        console.log(action.result);
                    }
                    else{
                        console.log(action.result);
                        Ext.ComponentQuery.query('userform')[0].getStore().add(action.result);
                    }
                    console.log(action.result);
                }
                ,
                failure:function(form,action){
                    console.log(action.result);
                }
            });
        }
        console.log(form.getValues());
    },
    submitForm:function(){
        var me = this;
        form = me.getView().lookupReference('form').getForm();
        console.log(form.getValues());
    }
});