 Ext.onReady(function() {
            Ext.create('Ext.panel.Panel', {
               renderTo : Ext.getBody(),
               layout : {
                  type :'vbox',
                  align: 'stretch'               
               },
               requires: ['Ext.layout.container.VBox'],
               xtype: 'layout-vertical-box',
               width : 600,
               height :400,
               frame :true,
               items : [{
                  title: 'Panel 1',
                  html : 'Panel with flex 1',
                  margin: '0 0 10 0',
                  flex : 1
               },{
                  title: 'Panel 2',
                  html : 'Panel with flex 2',
                  margin: '0 0 10 0',
                  flex : 2
               },{
                  title: 'Panel 3',
                  flex : 2,
                  margin: '0 0 10 0',
                  html : 'Panel with flex 2'
               },{
                  title: 'Panel 4',
                  html : 'Panel with flex 1',
                  margin: '0 0 10 0',
                  flex : 1
               }]
            });
         });