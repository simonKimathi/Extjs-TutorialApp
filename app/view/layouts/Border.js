Ext.define('TutorialApp.view.layouts.Border', {
    extend: 'Ext.window.Window',
    extend: 'Ext.container.Container',
    xtype: 'borderlayout',
    autoShow: true,
    shadow: true,
    modal: true,
    layout: 'border',
    width: 1000,
    height: 600,
    maximized: true,
    bodyBorder: false,
    anchor:'100%',
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
            height: 400,
            minHeight: 400,
            maxHeight: 400,
            items: [{
                xtype: 'vboxhboxcontainer'
            }]
        },
        {
            title: 'Navigation',
            region: 'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 125,
            minWidth: 100,
            maxWidth: 250,
            items: [{
                xtype: 'tablelayout'
            }]

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
            items: [{
                xtype: 'anchorlayout'
            }]
        },
    ]
});