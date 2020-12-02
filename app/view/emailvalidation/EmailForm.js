Ext.define('TutorialApp.view.emailvalidation.EmailForm', {
    extend: 'Ext.window.Window',
    
    autoShow:true,

    xtype : 'emailform', 
    
    width:500,
    
    items: [{
        
        xtype:'form',
        layout:'form',
        title:'Email Form',
        bodyPadding:'5 5 0',
        
        style: {
            'margin-bottom': '40px'
        },
        
        fieldDefaults: {
            msgTarget: 'under',
            autoFitErrors: false
        },

        defaultType: 'textfield',
     
        items: [{
            fieldLabel: 'Email',
            name: 'email',
            inputType:'email',
            itemId: 'email',
            allowBlank: false,
            vtype:'emailValidator'
        }]
        },

    
    ]
});