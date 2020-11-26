Ext.define('TutorialApp.customVtypes', {
    override:'Ext.form.field.VTypes',

    //check password constraints
    passwordCheck : function(val) {
        var reg = /^.*(?=.{8,16})(?=.*\d)(?=.*[a-zA-Z]).*$/;
        return reg.test(val);
    },
    passwordCheckText : 'Password should contain am uppercase and small case letter, special symbol, number and should be greater than 8 characters.',


    //check if password match vtype
    passwordMatch: function(val, field) {
        var pwd;

        if (field.initialPassField) {
            pwd = field.up('form').down('#' + field.initialPassField);

            return (val === pwd.getValue());
        }

        return true;
    },

    passwordMatchText: 'Passwords do not match',

    //check if email is valid vtype
    emailValidator:function (val){
        var email = /^(\w+)([\-+.][\w]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/;
        return email.test(val);
    },
    emailValidatorText:'invalid email provided',

    //check if url is valid vtype
    urlValidator:function (val){
        var url = /(((^https?)|(^ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/;
        return url.test(val);
    },
    urlValidatorText:'invalid url provided',

    //date range vtype
    daterange: function(val, field) {
        var date = field.parseDate(val),
            start, end;

        if (!date) {
            return false;
        }

        if (field.startDateField && (!this.dateRangeMax || (date.getTime() !== this.dateRangeMax.getTime()))) {
            start = field.up('form').down('#' + field.startDateField);

            start.setMaxValue(date);
            start.validate();
            this.dateRangeMax = date;
        }
        else if (field.endDateField && (!this.dateRangeMin || (date.getTime() !== this.dateRangeMin.getTime()))) {
            end = field.up('form').down('#' + field.endDateField);

            end.setMinValue(date);
            end.validate();
            this.dateRangeMin = date;
        }

        return true;
    },

    daterangeText: 'Start date must be less than end date'
   
});