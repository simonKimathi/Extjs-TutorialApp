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
        title: 'User ',
        html: 'User Page Start'
    },
    , {
        title: 'Login',
        html: 'Login Details'
    }, {
        title: 'SignUp',
        html: 'Signup Details'
    }, {
        title: 'Website Page',
        html: 'Page content'
    }, {
        title: 'Users Available',
        html: 'User Details Content'
    }]
});