Ext.define('TutorialApp.model.Comment', {
    extend: 'TutorialApp.model.Base',
    fields: [
        { name: 'postId', type: 'integer' },
        { name: 'id', type: 'integer' },
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'body', type: 'string' }
    ]
});