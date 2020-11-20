Ext.define('TutorialApp.view.posts.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'postgrid',
    controller: 'postgridcontroller',
    store: {
        type: 'posts'
    },
    layout: 'fit',
    selModel: {
        injectCheckbox: 'first',
        checkOnly: false,
        model: 'MULTI',
        type: 'checkboxmodel',
    },
    tbar: [{
            xtype: 'button',
            text: 'Add New Post',
            handler: 'onAddPostButtonClick'
        },
        {
            xtype: 'button',
            text: 'View Details',
            handler: 'onViewPostDetailsButtonClick'
        }
    ],
    columns: [
        { text: 'Post ID', dataIndex: 'id', flex: 1 }, //1/8
        { text: 'User ID', dataIndex: 'userId', flex: 1 }, //1/8
        { text: 'Title', dataIndex: 'title', flex: 2 }, //2/8
        { text: 'Content', dataIndex: 'body', flex: 4 }, // 4/8
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});