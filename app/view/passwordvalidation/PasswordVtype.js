Ext.define('TutorialApp.view.passwordvalidation.PasswordVtype', {
    override: 'Ext.form.field.VTypes',

    passwordCheck : function(val) {
        var reg = /^.*(?=.{8,16})(?=.*\d)(?=.*[a-zA-Z]).*$/;
        return reg.test(val);
    },
    passwordCheckText : 'Password should contain am uppercase and small case letter, special symbol, number and should be greater than 8 characters.',

    passwordMatch: function(val, field) {
        var pwd;

        if (field.initialPassField) {
            pwd = field.up('form').down('#' + field.initialPassField);

            return (val === pwd.getValue());
        }

        return true;
    },

    passwordText: 'Passwords do not match'
});