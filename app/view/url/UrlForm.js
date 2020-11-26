Ext.define('TutorialApp.view.url.UrlForm', {
    extend: 'Ext.window.Window',
    
    autoShow:true,

    xtype : 'urlform', 
    
    width:500,
    
    items: [{
        
        xtype:'form',
        layout:'form',
        title:'Url Form',
        bodyPadding:'5 5 0',
        
        style: {
            'margin-bottom': '40px'
        },
        
        fieldDefaults: {
            msgTarget: 'side',
            autoFitErrors: false
        },

        defaultType: 'textfield',
     
        items: [{
            fieldLabel: 'Url',
            name: 'url',
            itemId: 'email',
            allowBlank: false,
            vtype:'urlValidator'
        }]
        },

    
    ]
});