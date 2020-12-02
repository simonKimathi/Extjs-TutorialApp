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
    onRowClick:function( grid, record, element, rowIndex, e, eOpts ) {
       
        var bioDataForm= Ext.ComponentQuery.query('tabpanelcustom #userdetailform')[0].getForm();
        
        var addressdetailform=Ext.ComponentQuery.query('tabpanelcustom #addressdetailform')[0].getForm();
       
        var contactdetailform=Ext.ComponentQuery.query('tabpanelcustom #contactdetailform')[0].getForm();
        
        var companydetailform=Ext.ComponentQuery.query('tabpanelcustom #companydetailform')[0].getForm();
        
        bioDataForm.loadRecord(record);
        
        addressdetailform.loadRecord(record);
        
        contactdetailform.loadRecord(record);
        
        companydetailform.loadRecord(record);
        

    },
    onFormFieldIllustrationButtonClick:function(){
        Ext.create({
            xtype:'formfieldillustration'
        })
    },
    onRemoveButtonClick: function() {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            Ext.Ajax.request({
                url: 'http://localhost:8080/TrainingApp/api/users/deleteUserById/' + record.get('id'),
                method: 'DELETE',
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    console.dir(obj);
                    Ext.ComponentQuery.query('usergrid')[0].getStore().remove(record);
                },

                failure: function(response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }
            });
        }
    },
    onIdSearchEnterKey: function(field, e) {
        var me = this;
        // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
        // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
        if (e.getKey() == e.ENTER) {
            me.getRecordFromServer(field.getValue());
        }
    },
    getRecordFromServer: function(searchId) {
        if (searchId) {
            Ext.Ajax.request({
                url: 'http://localhost:8080/TrainingApp/api/users/getUserById/' + searchId,
                method: 'GET',
                success: function(response, opts) {
                    if (response.status == 200) {

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
        } else {
            Ext.Msg.alert('No search Id provided', 'Please insert an id to search for!!');
        }
    },
    onGetButtonClick: function() {
        var me = this;
        var searchId = me.getView().lookupReference('searchId').getValue();
        me.getRecordFromServer(searchId);


    },
    onAddUserFieldSetButtonClick: function() {
        Ext.create({
            xtype: 'registeruser'
        });
    },
    onViewUserPostsButtonClick: function () {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
           Ext.create({
                xtype: 'userpostswindow',
                viewModel: {
                    data: {
                        userId: record.get('userId'),

                    }
                }
            });

        }
    }
})