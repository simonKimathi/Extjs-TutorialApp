Ext.define('TutorialApp.view.layouts.Anchor', {
    extend: 'Ext.panel.Panel',
    layout:'anchor',
    width: 500,
    height: 400,

    xtype : 'anchorlayout', 
    
    items: [
        {
            xtype: 'panel',
            title: '75% Width and 20% Height',
            anchor: '75% 20%'
        },
        {
            xtype: 'panel',
            title: 'Offset -300 Width & -200 Height',
            anchor: '-300 -200'
        },
        {
            xtype: 'panel',
            title: 'Mixed Offset and Percent',
            anchor: '-250 20%'
        }
    ]
});