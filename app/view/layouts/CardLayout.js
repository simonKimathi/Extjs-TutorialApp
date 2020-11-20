var navigate = function(panel, direction){
    var layout = panel.getLayout();
    layout[direction]();
    Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
    Ext.getCmp('move-next').setDisabled(!layout.getNext());
};
Ext.define('TutorialApp.view.layouts.CardLayout', {
    extend: 'Ext.panel.Panel',
    title: 'Card Layout Example',
    width: 300,
    height: 200,
    layout: 'card',
    bodyStyle: 'padding:15px',
    defaults: {
        
        border: false
    },
    xtype : 'cardlayout', 
    
    layout:'card',

    bbar: [
        {
            id: 'move-prev',
            text: 'Back',
            handler: function(btn) {
                navigate(btn.up("panel"), "prev");
            },
            disabled: true
        },
        {
            id: 'move-next',
            text: 'Next',
            handler: function(btn) {
                navigate(btn.up("panel"), "next");
            }
        }
    ],

    items: [{
        id: 'card-0',
        html: '<h1>Check this Card out!</h1><p>Step 1 of 3</p>'
    },{
        id: 'card-1',
        html: '<p>Step 2 of 3</p>'
    },{
        id: 'card-2',
        html: '<h1>Congratulations. End!</h1><p>Step 3 of 3 - Complete</p>'
    }],
});