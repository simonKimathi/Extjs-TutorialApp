Ext.define('TutorialApp.store.Comments', {
    extend: 'Ext.data.Store',
    alias: 'store.commentstore',
    fields:[
        {name:'id', type:'integer'},
        {name:'postId', type:'integer'},
        {name:'name'},
        {name:'body'},

    ],
    proxy: {
        type: 'ajax',
        url: 'https://jsonplaceholder.typicode.com/comments',
        reader: {
            type: 'json',
            rootProperty: 'posts'
        }
    },


})