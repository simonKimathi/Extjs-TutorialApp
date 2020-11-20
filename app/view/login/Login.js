Ext.define('TutorialApp.view.login.Login', {
    extend:'Ext.window.Window',
    xtype:'login',
    // The requires block makes sure that we're including any classes that may be relied upon before instantiating our Login window. We need to include LoginController.js because we're about to designate it as our controller on the next line. We also need to include Ext.form.Panel since our view contains a Form panel.
    requires:[ 
        'TutorialApp.view.login.LoginController',
        'Ext.form.Panel'
    ],
    controller:'login', //The controller config designates a ViewController, which will then be attached to instances of the Login window
    bodyPadding:10,
    itemId:'login',
    title:'Login',
    closable:false,
    autoShow:'true',

    layout:'vbox',
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            iconCls: 'fa-user',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [
            {
            text: 'sign Up',
            listeners: {
                click: 'onSignupClick'
            },
        },{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            },
        }]
    }
   
});