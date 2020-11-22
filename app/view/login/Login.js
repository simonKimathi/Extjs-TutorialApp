Ext.define('TutorialApp.view.login.Login', {
    extend:'Ext.window.Window',
    xtype:'login',
    // The requires block makes sure that we're including any classes that may be relied upon before instantiating our Login window. We need to include LoginController.js because we're about to designate it as our controller on the next line. We also need to include Ext.form.Panel since our view contains a Form panel.
    requires:[ 
        'TutorialApp.view.login.LoginController',
        'Ext.form.Panel',
    ],
    controller:'login', //The controller config designates a ViewController, which will then be attached to instances of the Login window
    bodyPadding:10,
    itemId:'login',
    closable:false,
    autoShow:'true',
    layout:'hbox',
    items: [{

        xtype:'container',
        layout: { type: 'vbox' },
        padding:'20px',
        border:true,
        
        items:[{
        
        xtype: 'form',
        reference: 'form',
        title:'login',
        items: [{
            xtype: 'textfield',
            iconCls: 'fa-user',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [
            {
            text: 'sign Up',
            listeners: {
                click: 'onSignupClick'
            },
        },{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            },
        }]

        }

        ]},


    {
        xtype:'container',
        layout: { type: 'hbox' },
        padding:'20px',
        border:true,
        
            items:[{

            xtype: 'form',
            reference: 'form',
            items: [{


                xtype: 'fieldset',
                title: 'Bio data',
                padding:'20px',
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
            }, 
            
            {
                xtype: 'fieldset',
                title: 'Address',
                padding:'20px',
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
                    fieldLabel: 'zipcode',
                    emptyText: 'your zipcode',
                    name: 'addressZipcode',
                }]
            },
            ]
        },
    {
        xtype:'container',
        layout: { type: 'vbox' },
        padding:'10px',
        border:true,
        items:[       
        
        
        {
            xtype: 'fieldset',
            title: 'Geo Location',
            padding:'20px',
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
        },{
            xtype: 'fieldset',
            title: 'others',
            padding:'20px',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },

            items: [{
                fieldLabel: 'Phone',
                emptyText: 'your phone number',
                name: 'phone'
            },{
    
                fieldLabel: 'Website',
                emptyText: 'your Website',
                name: 'website'
            }]
        },

        {
            xtype: 'fieldset',
            title: 'Company',
            padding:'20px',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },

            items: [{
                fieldLabel: 'name',
                emptyText: 'company name',
                name: 'companyName'
            }, {
                fieldLabel: 'catchPhrase',
                emptyText: 'company catchPhrase',
                name: 'companyCatchPhrase'
            }, {
                fieldLabel: 'bs',
                emptyText: 'company bs',
                name: 'companyBs'
            }]
        },
    
    ],

        buttons: [{
            text: 'Register',
            formBind: true,
        }
        ]
    }
    
    ]
}]
   
});