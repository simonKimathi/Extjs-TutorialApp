Ext.define('TutorialApp.view.posts.PostForm', {
    extend: 'Ext.window.Window',
    xtype: 'postform',
    controller: 'postformcontroller',
    autoShow: true,
    modal: true,
    title:'Post Form',
    shadow: true,
    width: 600,
    viewModel:{
        type:'postformviewmodel'
    },

    items: [{
        xtype: 'form',
        layout: 'form',
        reference:'pform',
        defaults: {
            xtype: 'textfield',
            allowBlank: false
        },
        items: [
            {
                xtype: 'numberfield',
                name:'id',
                fieldLabel: 'Post Id',

            },
            {
                xtype: 'numberfield',
                name:'userId',
                fieldLabel: 'User Id',

            },
            {
                name:'title',
                fieldLabel: 'Title',
            },
            {
                name:'body',
                fieldLabel: 'Content',
            },
        ],
        buttons: [{
                text: 'Save',
                formBind: true,
                handler: 'onPostFormSubmit'
            },
            {
                text: 'Cancel',
                handler: 'onPostFormCancel'
            }
        ]
    }]
});