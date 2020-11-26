Ext.define('TutorialApp.view.layouts.TabPanelWindowLayout',{
    extend:'Ext.window.Window',
    xtype:'tabpanelwindowlayout',
    width:'100%',
    autoShow:true,
    modal:true,
    shadow:true,
    items:[
        // Ext.tab.Panel,
        {
            xtype:'tabpanel',
            title:'Tab Panels',
            activeItem:0,
            defaults:{
                bodyStyle:'padding:5px'
            },
            height:600,
            items:[
                {
                    title:'First Tab',
                    layout:'fit',
                    items:[
                        {
                            xtype:'usergrid',
                        }
                    ]
                }, {
                    title:'Second Tab',
                    items:[
                        {
                            xtype:'postgrid',
                        }
                    ]
                },
                {
                    title:'Third Tab',
                    items:[
                        {
                            xtype:'button',
                            text:'Third button in first tab'
                        }
                    ]
                }
            ]
        }
    ]

})