Ext.define('TutorialApp.view.users.registerUser', {
    extend: 'Ext.window.Window',
    xtype: 'register',
    controller:'registerController',
    reference:'form',
    autoShow: true,
    modal: true,
    shadow: true,
    scrollable:true,
    width: 800,
    height:700,
    title:'register',
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
        title:'Register',
        items: [


        {
        xtype:'container',
        layout: { type: 'hbox' },
        padding:'20px',
        border:true,
        
            items:[{


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
            
                ]
                }
                
                ],
                

                    buttons: [{
                        text: 'Register',
                        formBind: true,
                        handler:'saveData'
                    }
                    ]
                
            }]
   
        }]
});