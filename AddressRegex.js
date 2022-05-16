module.export = {
    NAME_REGEX_PATTERN : RegExp( '^[A-Z]{1}[a-z]{2,}$'),
    PINCODE_REGEX_PATTERN : RegExp ('^[0-9]{6}$'),
    PHONE_NUMBER_PATTERN : RegExp ('^[9][1][6-9][0-9]{9}$'),
    EMAIL_REGEX_PATTERN : RegExp ('^[a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/'),

    CheckNamePattern(value){
        let nameRegex = RegExp('^[A-Z][a-z]{3,}$')
            if (!nameRegex.test(value))
            throw 'Error! Invalid Input';
    },

    CheckZipCodePattern(value){
        let pinCodeRegex = new RegExp ('^[0-9]{6}$')
        if (!pinCodeRegex.test(value))
        throw 'Error! Invalid Input';
    },

    CheckPhoneNumberPattern(value){
        let phoneNumberRegex = new RegExp('^[9][1][6-9][0-9]{9}$')
            if (!phoneNumberRegex.test(value))
            throw 'Error ! Invalid Input';
    },

    CheckEmailPattrn(value){
        let emailRegex = new RegExp('^[a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/')
            if (!emailRegex.test(value))
            throw 'Error! Invalid Input';
    }
}