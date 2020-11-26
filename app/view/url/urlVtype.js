Ext.define('TutorialApp.view.url.urlVtype', {
    override: 'Ext.form.field.VTypes',

    urlValidator:function (val){
        var url = /(((^https?)|(^ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/;
        return url.test(val);
    },
    urlValidatorText:'invalid url provided'



});