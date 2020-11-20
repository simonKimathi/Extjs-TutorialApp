Ext.define('TutorialApp.view.users.formDetails', {
    extend: 'Ext.window.Window',
    xtype: 'formDetails',
    controller: 'formDetailscontroller',
    autoShow: true,
    modal: true,
    shadow: true,
    title:'form layout',
    items: [{        
        xtype: 'form',
        layout:'vbox',
        reference:'form',
        items:[{

            xtype:'htmleditor'

            },{
                xtype: 'timefield',
                label: 'time',
                name: 'time',
             },
             {
                xtype: 'textareafield',
                label: 'Bio',
                maxRows: 4,
                name: 'bio'
            },
            {
                xtype: 'numberfield',
                label: 'Age',
                minValue: 18,
                maxValue: 150,
                name: 'age'
            }
        ],
            

            
        buttons:[
            
            {
            xtype:'button',
            text:'cancel',
            formBind:true,
            handler:'submitForm'

        },{
            xtype:'button',
            text:'submit',
            formBind:true,
            handler:'submitForm'

        }]
        
    // }],
    // items: [{        
    //     xtype: 'form',
    //     layout:'hbox',
    //     reference:'form',
    //     items:[{
    //             xtype: 'timefield',
    //             label: 'time',
    //             name: 'time',
    //          },
    //          {
    //             xtype: 'textareafield',
    //             label: 'Bio',
    //             maxRows: 4,
    //             name: 'bio'
    //         },
    //         {
    //             xtype: 'numberfield',
    //             label: 'Age',
    //             minValue: 18,
    //             maxValue: 150,
    //             name: 'age'
    //         }
    //     ]

            
       
        
    }]
});