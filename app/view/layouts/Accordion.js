Ext.define('TutorialApp.view.layouts.Accordion', {
    extend: 'Ext.panel.Panel',
    
    layout:'accordion',
 
    xtype : 'accordionlayout', 
    width: 700,
    height: 500,
    defaults: {
        bodyPadding: 10
    },
    
    items: [{
        title: 'User Register',
        html: 'User Register Success'
    },
    , {
        title: 'Login',
        html: 'Login Here'
    }, {
        title: 'SignUp',
        html: 'Signup here'
    }, {
        title: 'Home Page',
        html: 'Home Page content'
    }, {
        title: 'Users',
        html: 'User Details Content'
    }]
});