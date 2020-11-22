Ext.define('TutorialApp.view.users.registerUser', {
    extend: 'Ext.form.Panel',
    xtype: 'register',
    controller:'register',
    requires:[
        'Ext.form.Panel',
        'TutorialApp.view.users.registerUserController',

    ],

    frame: true,
    title: 'Register',
    bodyPadding: 10,
    scrollable: true,
    width: 355,

    fieldDefaults: {
        labelAlign: "right",
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [{
        xtype: 'fieldset',
        title: 'Bio data',
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'Name',
            emptyText: 'Name',
            name: 'name'
        }, {
            fieldLabel: 'User Name',
            emptyText: 'Name',
            name: 'userName'
        }, {
            fieldLabel: 'Email',
            name: 'email',
            vtype: 'email'
        }
        ]
    }, {
        xtype: 'fieldset',
        title: 'Address',

        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'Street',
            emptyText: 'Your street',
            name: 'addressStreet'
        }, {
            fieldLabel: 'Suite',
            emptyText: 'your suite',
            name: 'saddressSuite'
        }, {
            fieldLabel: 'City',
            emptyText: 'your city',
            name: 'addressCity'
        }, {
            xtype:'number',
            fieldLabel: 'zipcode',
            emptyText: 'your zipcode',
            name: 'addressZipcode',
        }]
    }, {
        xtype: 'fieldset',
        title: 'Geo Location',

        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'Lattitude',
            emptyText: 'Your Lattitude',
            name: 'geoLat'
        }, {
            fieldLabel: 'Longtude',
            emptyText: 'your Longtude',
            name: 'geoLng'
        }]
    }],

    buttons: [{
        text: 'Register',
        formBind: true,
        listeners: {
            click: 'onLoginClick'
        },
    }]
});