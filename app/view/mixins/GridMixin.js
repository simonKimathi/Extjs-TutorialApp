Ext.define('TutorialApp.view.mixins.GridMixin', {
    getSelectedRecord:function(){
        var me = this;

        var records = me.getView().getSelectionModel().getSelection();
        if(records[0]){
            return records[0];

        }else{
            Ext.Msg.alert('No item is selected,Please select an item from list.')
        }
    },
    getSelectedRecords:function(){
        var me = this;

        var records = me.getView().getSelectionModel().getSelection();
        if(records){
            return records;

        }else{
            Ext.Msg.alert('No item is selected,Please select an item from list.')
        }
    },
});