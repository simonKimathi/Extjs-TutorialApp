Ext.define('TutorialApp.view.users.UserGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'usergrid',

    controller: 'usergridcontroller',
    store: {
        type: 'users'
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
        text: 'Add New User',
        handler: 'onAddUserButtonClick'
    },
    {
        xtype: 'button',
        text: 'View Details',
        handler: 'onViewUserDetailsButtonClick'
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
        xtype: 'button',
        text: 'Form Field Illustration',
        handler: 'onFormFieldIllustrationButtonClick'
    }
    ],
    columns: [
        { text: 'User ID', dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'UserName', dataIndex: 'username', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Street', dataIndex: 'addressStreet', flex: 1 },
        { text: 'Suite', dataIndex: 'addressSuite', flex: 1 },
        { text: 'City', dataIndex: 'addressCity', flex: 1 },
        { text: 'ZipCode', dataIndex: 'addressZipcode', flex: 1 },
        { text: 'Latitude', dataIndex: 'addressGeoLat', flex: 1 },
        { text: 'Longitude', dataIndex: 'addressGeoLng', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Website', dataIndex: 'website', flex: 1 },
        { text: 'Company Name', dataIndex: 'companyName', flex: 1 },
        { text: 'Company Catch Phrase', dataIndex: 'companyCatchPhrase', flex: 1 },
        { text: 'Company Bs', dataIndex: 'companyBs', flex: 1 },
    ],

    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        displayMsg: 'Display records {0} - {1} of {2}',
        emptyMsg: 'No Record to display'
    },
});