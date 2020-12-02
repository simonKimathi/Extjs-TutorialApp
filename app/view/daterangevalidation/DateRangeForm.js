Ext.define('TutorialApp.view.daterangevalidation.DateRangeForm', {
    extend: 'Ext.window.Window',
    
    autoShow:true,

    xtype : 'daterangeform', 
    
    width:500,
    
    items: [{
        
        xtype:'form',
        layout:'form',
        title:'Date Range Method',
        bodyPadding:'5 5 0',
        
        style: {
            'margin-bottom': '40px'
        },
        
        fieldDefaults: {
            msgTarget: 'under',
            autoFitErrors: false
        },

        defaultType: 'datefield',
        items: [{
            fieldLabel: 'Start Date',
            name: 'startdt',
            itemId: 'startdt',
            vtype: 'daterange',
            endDateField: 'enddt' 
        }, {
            fieldLabel: 'End Date',
            name: 'enddt',
            itemId: 'enddt',
            vtype: 'daterange',
            startDateField: 'startdt'
        }]      
        },

    
    ]
});