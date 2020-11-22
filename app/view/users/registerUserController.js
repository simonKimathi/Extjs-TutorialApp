Ext.define('TutorialApp.view.users.registerUserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.registerController',
    config: {
        /*
            Uncomment to add references to view components
            refs: [{
                ref: 'list',
                selector: 'grid'
            }],
        */
        /*
            Uncomment to listen for events from view components
            control: {
                    'useredit button[action=save]': {
                    click: 'updateUser'
                }
            }
        */
    },
    /**
     * Called when the view is created
     */
    init: function () {},
    saveData:function(){


        Ext.Ajax.request({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'POST',
            success: function(response, opts) {
                if (response.status == 200) {
                    console.log('saved successfully ' + response.status);
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

   },
});