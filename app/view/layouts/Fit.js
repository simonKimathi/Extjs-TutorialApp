Ext.define('TutorialApp.view.layouts.Fit', {
    extend: 'Ext.panel.Panel',
    
    xtype : 'fitlayout', 
    layout:'fit',
    title: 'Fit Layout',
    width: 300,
    height: 150,
    items: {
        title: 'Inner Panel',
        html: 'This is the inner panel content',
        bodyPadding: 20,
        border: false
    },
});