Ext.define('TutorialApp.view.passwordvalidation.PasswordFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.passwordformcontroller',

    init: function () {},
    
    validateField: function(field) {
        field.next().validate();
    }
});