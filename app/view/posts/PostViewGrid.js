Ext.define('TutorialApp.view.posts.PostViewGrid', {
    extend: 'Ext.grid.GridPanel',
    xtype:'postviewgrid',
    store: {
        type: 'posts'
    },
    columns: [
        {text: 'Id', dataIndex: 'id',flex:1},
        {text: 'title', dataIndex: 'title',flex:2},
        {text: 'Body', dataIndex: 'body',flex:3}
    ]
})