Ext.define('TutorialApp.view.layouts.Absolute', {
    extend: 'Ext.window.Window',
    
    xtype: 'absolutelayoutwindow',
    
    autoShow: true,
    title: 'Absolute Layout',
    shadow: true,
    modal: true,
    width: 900,
    defaults: {
        bodyPadding: 15,
        width: 200,
        height: 100,
        frame: true
    },
    layout: 'absolute',
    items: [{
            title: 'Panel 1',
            x: 50,
            y: 50,
            html: 'Positioned at x:50, y:50'
        },
        {
            title: 'Panel 2',
            x: 125,
            y: 125,
            html: 'Positioned at x:125, y:125'
        }
    ]

});
