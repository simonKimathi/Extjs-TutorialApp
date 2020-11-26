Ext.define('TutorialApp.view.users.UserFieldSetController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userfieldsetController',
    config: {

    init: function () {},
    
    saveDataFromForm: function(){

        Ext.Ajax.request({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'POST',
            success: function(response, opts) {
                if (response.status == 200) {
                    console.log('User Added successfully ' + response.status);
                } else {
                    console.log('server-side failure with status code ' + response.status);
                }
                console.log(response.status);

                var obj = Ext.decode(response.responseText);
                console.dir(obj);
                console.log(obj);
            },

            failure: function(response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        });
    }
   },

});