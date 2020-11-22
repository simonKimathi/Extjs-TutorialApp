Ext.define('TutorialApp.view.posts.PostForm', {
    extend: 'Ext.window.Window',
    xtype: 'postform',
    controller: 'postformcontroller',
    autoShow: true,
    modal: true,
    shadow: true,
    width: 600,
    items: [{
        xtype: 'form',
        frame:true,
        layout: 'form',
        reference:'form',
        jsonSubmit:true,
        scrollable:true,
        jsonSubmit:true,
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