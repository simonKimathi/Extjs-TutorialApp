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
        if (record) {
            console.log(record);
            var windowContainer = Ext.create({
                xtype: 'postform'
            });
            windowContainer.lookupReference('form').getForm().loadRecord(record);
        }
    },
    onRemoveButtonClick: function() {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            Ext.Ajax.request({
                url: 'https://jsonplaceholder.typicode.com/posts/' + record.get('id'),
                method: 'DELETE',
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    console.dir(obj);
                    Ext.ComponentQuery.query('postgrid')[0].getStore().remove(record);
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
                url: 'https://jsonplaceholder.typicode.com/posts/' + searchId,
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
    onPostIdSearchEnterKey: function(field, e) {
        var me = this;
        // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
        // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
        if (e.getKey() == e.ENTER) {
            me.getRecordFromServer(field.getValue());
        }
    },
    getPostIDCommentsRecordFromServer: function(searchId) {
        if (searchId) {
            Ext.Ajax.request({
                url: 'https://jsonplaceholder.typicode.com/posts/' + searchId+'/comments',
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
    onCommentGetButtonClick: function() {
        var me = this;
        var searchId = me.getView().lookupReference('searchIdComment').getValue();
        me.getPostIDCommentsRecordFromServer(searchId);


    },
    onFormFieldIllustrationButtonClick: function() {
        Ext.create({
            xtype: 'formfiledsillustration'
        });
    }

})