Ext.define('TutorialApp.view.layouts.CardLayoutDemo', {
   extends:'Ext.window.Window',
    xtype:'cardlayoutdemo',
    controller:'cardlayoutdemocontroller',
    autoshow:true,
    width:500,
    items:[{
        xtype:'panel',
        layout:'card',
        height:200,
        bodyStyle:'padding:5px',
        defaults:{   
            border:false
        },
        items:[{
            id:'card-0',
            html:'first wizard'
        },{
            id:'card-1',
            html:'first wizard'
        },{
            id:'card-2',
            html:'first wizard'
        },{
            id:'card-3',
            html:'first wizard'
        }],
        buttons:[{
            text:'prev',
            handler:'onPrevClick'
        },{
            xtype:'tbfill'
        },{
            text:'next',
            handler:'onNextClick'
        }]

    }]

},
function(){


});