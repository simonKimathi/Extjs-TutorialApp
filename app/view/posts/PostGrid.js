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
        text: 'Add New post',
        handler: 'onAddPostButtonClick'
    },
    {
        xtype: 'button',
        text: 'View Details',
        handler: 'onViewPostDetailsButtonClick'
    },
    {
        xtype: 'button',
        text: 'Remove',
        handler: 'onRemoveButtonClick'
    },
    {
        xtype: 'numberfield',
        reference: 'searchId',
        emptyText: 'Id to search',
        width: 100,
        listeners: {
            specialkey: 'onIdSearchEnterKey'
        }
    },
    {
        xtype: 'button',
        text: 'Get Record',
        handler: 'onGetButtonClick'
    },
    {
        xtype: 'numberfield',
        reference: 'searchIdComment',
        emptyText: 'Id to search',
        width: 100,
        listeners: {
            specialkey: 'onIdSearchEnterKey'
        }
    },
    {
        xtype: 'button',
        text: 'Get Comment',
        handler: 'onCommentGetButtonClick'
    }],
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