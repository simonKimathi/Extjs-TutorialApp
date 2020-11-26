Ext.define('TutorialApp.view.layouts.Border', {
    extend: 'Ext.window.Window',
    
    xtype: 'borderlayout',
    autoShow: true,
    shadow: true,
    modal: true,
    layout: 'border',
    width: 900,
    height: 400,
    anchor:'100%',
    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },
    
    items: [{
            title: 'Footer',
            region: 'south',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            html: '<p>Footer content</p>'
        },
        {
            title: 'Header',
            region: 'north',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            html: '<p>Header content</p>'
        },
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
            title: 'Main Content',
            collapsible: false,
            region: 'center',
            margin: '5 0 0 0',
            items: [{
                xtype: 'accordionlayout'
            }]
        },
        {
            title: 'Navigation',
            region: 'east',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            html: '<p>East content like navigation links could go here</p>'
        },
    ]
});