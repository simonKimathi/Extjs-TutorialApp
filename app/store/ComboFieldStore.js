Ext.define('TutorialApp.store.ComboFieldStore', {
    extend: 'Ext.data.Store',
    alias: 'store.combofieldstore',

    fields: [
        { name: 'id', type: 'integer' },
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' },
        { name: 'age', type: 'int' },
        { name: 'eyeColor', type: 'string' }
    ],

    data: [
        { id: 1, firstName: 'Ed', lastName: 'Spencer' },
        { id: 2, firstName: 'Tommy', lastName: 'Maintz' },
        { id: 3, firstName: 'Aaron', lastName: 'Conran' }
    ]

});