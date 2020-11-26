Ext.define('TutorialApp.view.users.UserFieldset', {
    extend: 'Ext.window.Window',
    xtype: 'registeruser',
    controller:'userfieldsetController',
    reference:'form',
    autoShow: true,
    modal: true,
    shadow: true,
    scrollable:true,
    width: 800,
    height:700,
    title:'Registration Form',
    padding:'10',

    fieldDefaults: {
        labelAlign: "right",
        labelWidth: 115,
        msgTarget: 'side'
    },

    layout:'hbox',
    items: [{

        xtype:'container',
        layout: { type: 'vbox' },
        padding:'20px',
        border:true,
        
        items:[{
        
        xtype: 'form',
        reference: 'form',
        title:'Enter Your Details',
        items: [


        {
        xtype:'container',
        layout: { type: 'hbox' },
        padding:'20px',
        border:true,
        
            items:[{


                xtype: 'fieldset',
                title: 'Bio Data',
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
                    emptyText: 'User Name',
                    name: 'username'
                }, {
                    fieldLabel: 'Email',
                    name: 'email',
                    emptyText:'Email',
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
                    emptyText: 'Street',
                    name: 'addressStreet'
                }, {
                    fieldLabel: 'Suite',
                    emptyText: 'Suite',
                    name: 'addressSuite'
                }, {
                    fieldLabel: 'City',
                    emptyText: 'City',
                    name: 'addressCity'
                }, {
                    fieldLabel: 'Zipcode',
                    emptyText: 'Zipcode',
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
                    title: 'Location Information',
                    padding:'20px',
                    defaultType: 'textfield',
                    defaults: {
                        anchor: '100%'
                    },

                    items: [{
                        fieldLabel: 'Latitude',
                        emptyText: 'Latitude',
                        name: 'geoLat'
                    }, {
                        fieldLabel: 'Longitude',
                        emptyText: 'Longitude',
                        name: 'geoLng'
                    }]
                },{
                    xtype: 'fieldset',
                    title: 'Phone and Website',
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
                        emptyText: 'Company Name',
                        name: 'companyName'
                    }, {
                        fieldLabel: 'Catch Phrase',
                        emptyText: 'CompanyCatch Phrase',
                        name: 'companyCatchPhrase'
                    }, {
                        fieldLabel: 'bs',
                        emptyText: 'Company Bs',
                        name: 'companyBs'
                    }
                  ]
                  
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    handler: 'saveDataFromForm'
                }
            
                ]

                }
                
                ]
            }]
   
        }]
});