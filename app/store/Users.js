Ext.define('TutorialApp.store.Users', {
    extend:'Ext.data.Store',
    alias:'store.users',
    model:'TutorialApp.model.User',
    proxy:{
        type:'ajax',
        url:'http://localhost:8080/TrainingApp/api/users/getAllUsers/',
        reader:{
            type:'json',
            rootProperty:'users',
        }
    },
    autoLoad:true,
    

});