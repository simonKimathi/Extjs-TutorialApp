Ext.define('TutorialApp.model.menu.Accordion', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'text' },
        { name: 'iconCls' }
    ],
    hasMany: {
        model: 'TutorialApp.model.menu.TreeNode',
        foreignKey: 'parent_id',
        name: 'items'
    }
});