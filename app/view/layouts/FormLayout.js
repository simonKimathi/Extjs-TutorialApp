Ext.define('TutorialApp.view.layouts.FormLayout', {
    extend: 'Ext.panel.Panel',
    
    xtype : 'formlayout', 
    
    width: 700,
    height: 500,
    title: "Form Layout",
    layout: 'form',
    bodyPadding: 5,
    defaultType: 'textfield',
    items: [{
        xtype:'container',
        layout: { type: 'hbox' },
        border:true,
        items:[
            {
                xtype: 'textfield',
                name:'firstName',
                fieldLabel: 'First Name',
                //padding:'5 5 5 5'
            },
            {
                xtype: 'textfield',
                name:'lastName',
                fieldLabel: 'Last Name',
                //padding:'5 5 5 5'
            },
            {
                xtype: 'textfield',
                name:'surName',
                fieldLabel: 'Sur Name',
                //padding:'5 5 5 5'
            }
        ]
    },{
         fieldLabel: 'Company',
         name: 'company'
     }, {
         fieldLabel: 'Email',
         name: 'email',
         vtype:'email'
     }, {
         fieldLabel: 'DOB',
         name: 'dob',
         xtype: 'datefield'
     }, {
         fieldLabel: 'Age',
         name: 'age',
         xtype: 'numberfield',
         minValue: 0,
         maxValue: 100
     }, {
         xtype: 'timefield',
         fieldLabel: 'Time',
         name: 'time',
         minValue: '8:00am',
         maxValue: '6:00pm'
     }]
});