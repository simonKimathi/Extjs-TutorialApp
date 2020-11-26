Ext.define('TutorialApp.view.layouts.TabPanelCustom', {
    extend: 'Ext.tab.Panel',
    xtype: 'tabpanelcustom',
    activeItem: 0,
    defaults: {
        bodyStyle: 'padding:5px'
    },
    items: [
        {
            title: 'Bio Data',
            items: [
                {
                    xtype:'form',
                    itemId:'userdetailform',
                    items:[
                        {
                            xtype:'numberfield',
                            fieldLabel:'User ID',
                            name:'id'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Name',
                            name:'name'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Email',
                            name:'email'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'User Name',
                            name:'username'
                        }
                    ]
                }
            ]
        },
        
        {
            title: 'Address ',
            items: [
                {
                    xtype:'form',
                    itemId:'addressdetailform',
                    items:[
                        {
                            xtype:'textfield',
                            fieldLabel:'Street',
                            name:'addressStreet'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'City',
                            name:'addressCity'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Suite',
                            name:'addressSuite'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'ZipCode',
                            name:'addressZipcode'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Latitude',
                            name:'addressGeoLat'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Longitude',
                            name:'addressGeoLng'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Contact Details ',
            items: [
                {
                    xtype:'form',
                    itemId:'contactdetailform',
                    items:[
                        {
                            xtype:'textfield',
                            fieldLabel:'Phone',
                            name:'phone'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Website',
                            name:'website'
                        }
                    ]
                }
            ]
        },


        {
            title: 'Company Info',
            items: [
                {
                    xtype:'form',
                    itemId:'companydetailform',
                    items:[
                        {
                            xtype:'textfield',
                            fieldLabel:'Company Name',
                            name:'companyName'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Catch Phrase',
                            name:'companyCatchPhrase'
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Company Bs',
                            name:'companyBs'
                        }
                    ]
                }
            ]

        }
    ]

});