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
        'Ext.tree.Panel'

 
       
    ],
    

    controller: 'main',

    plugins: 'viewport',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    scrollable:true,
    layout:'fit',

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
                    width: 120,
                    height:300,
                    scrollable:true
                }
            }
        }
    },


    items: [       
        
        {
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
        },
        {
            xtype:'treepanel',
            title:'layouts',

            expanded: true,
            root: {
                text: 'Root',
                expanded: true,
                children: [
                    {
                        text: 'Child 1',
                        leaf: true,
                        items: [{
                            xtype: 'vboxhboxcontainer'
                        }]
                    },
                    {
                        text: 'Child 2',
                        leaf: true
                    }
                ]
            }
        },
        // {
        //     title: 'Groups',
        //     iconCls: 'fa-users',
        //     bind: {
        //         html: '{loremIpsum}'
        //     }
        // }, {
        //     title: 'Settings',
        //     iconCls: 'fa-cog',
        //     bind: {
        //         html: '{loremIpsum}'
        //     }
        // },
        {
            title: 'Border Layout',
            iconCls: 'fa-border',
            items: [{
                xtype: 'borderlayout'
            }]
        },
        // {
        //     title: 'VBox and HBox Layout',
        //     iconCls: 'fa-users',
        //     items: [{
        //         xtype: 'vboxhboxcontainer'
        //     }]
        // },
        //  {
        //     title: 'Accordion Layout',
        //     iconCls: 'fa-users',
        //     items: [{
        //         xtype: 'accordionlayout'
        //     }]
        // }
        ,{
        // }, {
        //     title: 'Absolute Layout',
        //     iconCls: 'fa-users',
        //     items: [{
        //         xtype: 'absolutelayoutwindow'
        //     }]
        // }, {
            title: 'Form Layout',
            iconCls: 'fa-border',
            items: [{
                xtype: 'formlayout'
            }]
        },
        //  {
        //     title: 'Anchor Layout',
        //     iconCls: 'fa-border',
        //     items: [{
        //         xtype: 'anchorlayout'
        //     }]
        // } ,
          {
            title: 'Card Layout',
            iconCls: 'fa-border',
            items: [{
                xtype: 'cardlayout'
            }]
        }, {
            title: 'Fit Layout',
            iconCls: 'fa-border',
            items: [{
                xtype: 'fitlayout'
            }]
        },{
            title: 'Table Layout',
            iconCls: 'fa-border',
            items: [{
                xtype: 'tablelayout'
            }]
        }, {
            title: 'Settings',
            iconCls: 'fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }],
        buttons: [{
            text: 'Logout',
            formBind: true,
            listeners: {
                click: 'onLogoutClick'
            }
        }
    ]
});
