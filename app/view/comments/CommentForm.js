Ext.define('TutorialApp.view.comments.CommentForm',{
    extend:'Ext.window.Window',
    xtype:'commentform',
    controller:'commentformcontroller',
    // autoShow:true,
    modal:true,
    shadow:true,
    width:500,
    layout:'fit',
    bind:{
        title:'{title}'
    },
    viewModel:{
        type:'commentformviewmodel'
    },

    items:[
        {
            xtype:'form',
            layout:'form',
            reference:'form',
            jsonSubmit:true,
            items:[
                {
                    xtype:'numberfield',
                    name:'postId',
                    allowBlank:false,
                    fieldLabel: 'Post ID',
                    bind:{
                        value:'{postId}'
                    }
                },
                {
                    xtype:'numberfield',
                    name:'id',
                    fieldLabel: 'ID',
                    allowBlank:true,
                    disabled:true,
                }
                ,{
                    xtype:'textfield',
                    name:'name',
                    fieldLabel: 'Name',
                    allowBlank:false,
                    bind:{
                        value:'{name}'
                    }
                },
                {
                    xtype:'textfield',
                    inputType:'email',
                    name:'email',
                    fieldLabel: 'Email',
                    allowBlank:false,
                },
                {
                    xtype     : 'textareafield',
                    grow      : true,
                    allowBlank:false,
                    name      : 'body',
                    fieldLabel: 'Message',
                    maxlength:300,
                }
            ],
            buttons:[
                {
                    text:'Save',
                    formBind:true,
                    handler:'onSaveButtonClick'
                },
                {
                    text:'Cancel',
                    handler:'onCancelButtonClick'
                }
            ]
        }
    ]


});