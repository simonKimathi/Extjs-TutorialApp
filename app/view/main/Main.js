/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TutorialApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

 
       
    ],

    controller: 'main',
    plugins:'viewport',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },


    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        items: [{
            xtype: 'usergrid'
        }]
    },  {
        title: 'Posts',
        iconCls: 'fa-user',
        items: [{
            xtype: 'postgrid'
        }]
    },  {
        title: 'Tab Panel Example',
        iconCls: 'fa-cog',
        items: [{
            xtype: 'masterdetaillayout'
        }]
    },  {
        title: 'Date RangeExample',
        iconCls: 'fa-cog',
        items: [{
            xtype: 'daterangeform'
        }]
    }, {
        title: 'Password Validation',
        iconCls: 'fa-cog',
        items: [{
            xtype: 'passwordform'
        }]
    },{
        title: 'Email Validation',
        iconCls: 'fa-cog',
        items: [{
            xtype: 'emailform'
        }]
    },{
        title: 'Url Validation',
        iconCls: 'fa-cog',
        items: [{
            xtype: 'urlform'
        }]
    },{
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }],
    buttons: [{
        text: 'Logout',
        formBind: true,
        width:500,
        listeners: {
            click: 'onLogoutClick'
        }
    }]
});