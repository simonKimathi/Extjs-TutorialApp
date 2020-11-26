Ext.define('TutorialApp.view.emailvalidation.EmailVtype', {
    override: 'Ext.form.field.VTypes',

    emailValidator:function (val){
        var email = /^(\w+)([\-+.][\w]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/;
        return email.test(val);
    },
    emailValidatorText:'invalid email provided'
    
});