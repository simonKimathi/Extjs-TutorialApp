Ext.define('TutorialApp.model.Post', {
    extend: 'TutorialApp.model.Base',
    fields: [
        { name: 'userId', type: 'integer' },
        { name: 'id', type: 'integer' },
        { name: 'title', type: 'string' },
        { name: 'body', type: 'string' }
    ]
});