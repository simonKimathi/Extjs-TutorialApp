Ext.define('TutorialApp.view.passwordvalidation.PasswordForm', {
    extend: 'Ext.window.Window',

    controller:'passwordformcontroller',
    
    autoShow:true,

    xtype : 'passwordform', 
    
    width:500,
    
    items: [{
        
        xtype:'form',
        layout:'form',
        title:'Password Verification',
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
            fieldLabel: 'Password',
            name: 'password',
            inputType:'password',
            itemId: 'password',
            allowBlank: false,
            listeners: {
                validitychange: 'validateField',
                blur: 'validateField'
            }, 
            vtype: 'passwordCheck'

        }, {
            fieldLabel: 'Confirm Password',
            name: 'passwordConfirm',
            inputType:'password',
            vtype: 'passwordMatch',
            initialPassField: 'password'
        }]
        },

    
    ]
});