Ext.define('TutorialApp.view.layouts.ParentContainer', {
    extend: 'Ext.container.Container',
    
    xtype : 'vboxhboxcontainer', 
    padding: '5 5 5 5',
    style: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: '2px'
    },
    layout: { type: 'vbox' },

    items: [
        {
            xtype:'container',
            layout: { type: 'hbox' },
            border:true,
            items:[
                {
                    xtype: 'textfield',
                    name:'firstName',
                    fieldLabel: 'First Name',
                    padding:'5 5 5 5'
                },
                {
                    xtype: 'textfield',
                    name:'lastName',
                    fieldLabel: 'Last Name',
                    padding:'5 5 5 5'
                },
                {
                    xtype: 'textfield',
                    name:'surName',
                    fieldLabel: 'Sur Name',
                    padding:'5 5 5 5'
                }
            ]
        },
        {
            xtype:'container',
            layout: { type: 'vbox' },
            border:true,
            items:[{
                xtype:'component',
                html: '<h1>Component 3</h1>',
                padding:'5 5 5 5'
            },
            {
                xtype:'component',
                html: '<h1>Component 4</h1>',
                padding:'5 5 5 5'
            }
        ]
        }
    ]
});