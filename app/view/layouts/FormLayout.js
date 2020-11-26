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
        fieldLabel: 'First Name',
         name: 'first',
         allowBlank:false
     },{
         fieldLabel: 'Last Name',
         name: 'last'
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