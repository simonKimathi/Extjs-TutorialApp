Ext.define('TutorialApp.view.users.UserForm', {
    extend: 'Ext.window.Window',
    xtype: 'userform',
    controller: 'userformcontroller',
    reference:'form',
    autoShow: true,
    modal: true,
    shadow: true,
    scrollable:true,
    layout:'fit',
    width: 600,
    height:500,
    items: [{
        
        xtype: 'form',
        frame:true,
        layout: 'form',
        reference:'form',
        jsonSubmit:true,
        scrollable:true,
        jsonSubmit:true,
        defaults: {
            xtype: 'textfield',
            allowBlank: false
        },
        items: [{
                xtype: 'numberfield',
                name:'id',
                allowBlank: true,
                disabled: true,
                fieldLabel: 'User Id',

            },
            {
                name:'username',
                fieldLabel: 'User Name',
            },
            {
                name:'email',
                fieldLabel: 'Email',
            },
            
            // {
            //     name:'username',
            //     fieldLabel: 'User Name',
            // },
            // {
            //     name:'email',
            //     fieldLabel: 'Email',
            // },
            // {
            //     name:'addressStreet',
            //     fieldLabel: 'Address Street',
            // },
            // {
            //     name:'addressSuite',
            //     fieldLabel: 'Address Suite',
            // },
            // {
            //     name:'addressCity',
            //     fieldLabel: 'Address City',
            // },
            // {
            //     name:'addressZipcode',
            //     fieldLabel: 'Address Zipcode',
            // },
            // {
            //     name:'addressGeoLat',
            //     fieldLabel: 'Address Geo Latitude',
            // },
            // {
            //     name:'addressGeoLng',
            //     fieldLabel: 'Address Geo Longitude',
            // },
            // {
            //     name:'phone',
            //     fieldLabel: 'Phone',
            // },
            // {
            //     name:'website',
            //     fieldLabel: 'Website',
            // },
            // {
            //     name:'companyName',
            //     fieldLabel: 'Company Name',
            // },
            // {
            //     name:'companyCatchPhrase',
            //     fieldLabel: 'Company Catch Phrase',
            // },
            // {
            //     name:'companyBs',
            //     fieldLabel: 'Company Bs',
            // }

        ],
        buttons: [{
                text: 'Save',
                formBind: true,
                handler: 'onUserFormSubmit'
            },
            {
                text: 'Cancel',
                handler: 'onUserFormCancel'

            }
        ]
    }]
});