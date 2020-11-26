Ext.define('TutorialApp.view.layouts.MasterDetailLayout',{
    extend: 'Ext.container.Container',
    xtype:'masterdetaillayout',
    layout:'border',
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },
    height:600,
    items:[
        {
            title: 'Navigation',
            region: 'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            html: '<h2>Main Page</h2><p>This is where the main content would go</p>'

        },
        {
            title: 'Master',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            items: [
                {
                    xtype:'usergrid'
                }
            ]
        },
        {
            title: 'Detail',
            region: 'south',
            height: 300,
            minHeight: 75,
            maxHeight: 300,
            items:[
                {
                    xtype:'tabpanelcustom'
                }
            ]
        },
    ]


});