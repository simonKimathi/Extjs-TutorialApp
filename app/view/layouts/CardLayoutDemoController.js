Ext.define('TutorialApp.view.layouts.CardLayoutDemoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cardlayoutdemocontroller',
    /**
     * Called when the view is created
     */
    init: function () {},

    onNextClick:function(btn, e, eOOpt){
        var me=this;
        view=me.getView(),
        panel=view.lookupReference('panel');
        me.navigate(panel,'next');

    },
    onPrevClick:function(btn, e, eOOpt){
        var me=this;
        view=me.getView(),
        panel=view.lookupReference('panel');
        me.navigate(panel,'prev');
    },
    navigate:function(panel, direction){
        var layout=panel.getLayout();
        layout[direction]();
        Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
        Ext.getCmp('move-next').setDisabled(!layout.getPrev());

    }
});