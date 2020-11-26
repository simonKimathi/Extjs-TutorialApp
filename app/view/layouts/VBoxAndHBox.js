Ext.define('TutorialApp.view.layouts.ParentContainer', {
    extend: 'Ext.container.Container',
    
    xtype : 'vboxhboxcontainer', 
    padding: '5 5 5 5',
    style: {
        borderColor: 'blue',
        borderStyle: 'solid',
        borderWidth: '5px'
    },
    layout: { type: 'hbox' },

    items: [
        {
            xtype:'component',
            html: '<h1>Component 1</h1>',
            padding:'5 5 5 5'
        },
        {
            xtype:'component',
            html: '<h1>Component 2</h1>',
            padding:'5 5 5 5'
        },
        {
            xtype:'container',
            layout: { type: 'vbox' },
            border:true,
            style: {
                borderColor: 'red',
                borderStyle: 'solid',
                borderWidth: '5px'
            },
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