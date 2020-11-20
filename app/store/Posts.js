Ext.define('TutorialApp.store.Posts', {
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'TutorialApp.model.Post',
    proxy: {
        type: 'ajax',
        url: 'https://jsonplaceholder.typicode.com/posts',
        reader: {
            type: 'json',
            rootProperty: 'posts'
        }
    },
    //autoLoad: true,
    pageSize: 10

})