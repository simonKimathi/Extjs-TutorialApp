Ext.define('TutorialApp.view.users.FormFieldIllustration', {
    extend: 'Ext.window.Window',

    xtype: 'formfieldillustration',
    controller: 'formfieldillustrationcontroller',
    autoShow: true,
    modal: true,
    shadow: true,
    width: 800,
    title: 'Form Field Illustration',

    items: [{
        xtype: 'form',
        layout: 'form',
        reference: 'form',
        items: [{
                xtype: 'htmleditor',
                enableColors: false,
                name: 'content',
                enableAlignments: false
            },
            {
                xtype: 'combo',
                name: 'userId',
                store: {
                    type: 'combofieldstore'
                },
                queryMode: 'local',
                displayField: 'firstName',
                valueField: 'id',
                listeners: {
                    change: 'onUserIdChange',
                    select: 'onUserIdSelect'
                }
            },
            {
                xtype: 'datefield',
                maxValue: Ext.Date.subtract(new Date(), Ext.Date.YEAR, 18), //18 years 
                format: 'd-m-Y',
                fieldLabel: 'Date of Birth',
                minValue: Ext.Date.subtract(new Date(), Ext.Date.YEAR, 30)


            },
            {
                xtype: 'filefield',
                allowBlank: false,
                name: 'file'

            }
        ],
        buttons: [{
                text: 'Save',
                formBind: true,
                handler: 'onFormSubmit'
            },
            {
                text: 'Cancel',
                handler: 'onFormCancel'

            }
        ]
    }]
});