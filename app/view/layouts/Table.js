Ext.define('TutorialApp.view.layouts.Table', {
    extend: 'Ext.panel.Panel',
    
    xtype : 'tablelayout', 
    layout: {
        type: 'table',
        columns: 3
    },
    
    title: 'Table Layout',
    width: 500,
    height: 250,
    defaults: {
        bodyStyle: 'padding:20px'
    },
    items: [{
        html: 'Cell A content',
        rowspan: 2
    },{
        html: 'Cell B content',
        colspan: 2
    },{
        html: 'Cell C content',
        cellCls: 'highlight'
    },{
        html: 'Cell D content'
    }],
});