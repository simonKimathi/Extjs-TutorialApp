Ext.define('TutorialApp.view.passwordvalidation.PasswordVtype', {
    override: 'Ext.form.field.VTypes',

    password: function(val, field) {
        var pwd;

        if (field.initialPassField) {
            pwd = field.up('form').down('#' + field.initialPassField);

            return (val === pwd.getValue());
        }

        return true;
    },

    passwordText: 'Passwords do not match'
});