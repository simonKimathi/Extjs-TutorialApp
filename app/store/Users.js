Ext.define('TutorialApp.store.Users', {
    extend:'Ext.data.Store',
    alias:'store.users',
    model:'TutorialApp.model.User',
    proxy:{
        type:'ajax',
        url:'https://jsonplaceholder.typicode.com/users',
        reader:{
            type:'json',
            rootProperty:'users',
        }
    },
    autoLoad:true,
    

});