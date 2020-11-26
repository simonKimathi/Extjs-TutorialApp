Ext.define('TutorialApp.store.Menu', {
    extend: 'Ext.data.Store',
    alias: 'store.menu',
    storeId: 'menu',
    model: 'TutorialApp.model.menu.Accordion',
    proxy: {
        type: 'ajax',
        url: '/resources/menulist.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            exception: function(proxy, response, operation) {
                console.log(response.responseText);
            }
        }
    },

});