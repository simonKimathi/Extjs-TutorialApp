Ext.define('TutorialApp.view.comments.CommentsGrid', {
    extend: 'Ext.grid.GridPanel',
    xtype:'commentsgrid',
    store: {
        type: 'commentstore'
    },
    columns: [
        {text: 'Id', dataIndex: 'id',flex:1},
        {text: 'name', dataIndex: 'name',flex:2},
        {text: 'Body', dataIndex: 'body',flex:3}
    ]
})