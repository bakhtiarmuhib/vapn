$.validator.unobtrusive.adapters.addBool("booleanrequired", "required");

$.validator.addMethod("dob", function(value) {
    try {

        //alert(value);

        var d1 = $.datepicker.parseDate('dd/mm/yy', value);
        var d2 = Date.now();

        return d1 < d2;
    } catch (error) {
        return false;
    }
});

$.validator.unobtrusive.adapters.add("dob", function(options) {
    options.rules["dob"] = true;
    options.messages["dob"] = options.message;
});

//checkboxNoCertificateCheck
$.validator.addMethod("checkboxnocertificatecheck", function(value, element, params) {
    try {

        //I do not have my certificate checkbox
        var checkboxNoCertificateVar = element.checked;
        var fileuploadedVar = $("#fileuploaded").val();

        //Additional Information
        var evidenceNotesVar = $('textarea[id="' + params['EvidenceNotes'] + '"]').val();

        if (checkboxNoCertificateVar == false) {
            if (fileuploadedVar == "true") {
                return true;
            }
        } else if (checkboxNoCertificateVar == true) {
            if (evidenceNotesVar != '') {

                $('textarea[id="' + params['EvidenceNotes'] + '"]').removeClass("input-validation-error");

                return true;
            } else {
                $('textarea[id="' + params['EvidenceNotes'] + '"]').addClass("input-validation-error");
            }
        }

        return false;

    } catch (error) {
        return false;
    }
});

//['EvidenceNotes'] - param1
$.validator.unobtrusive.adapters.add("checkboxnocertificatecheck", ['EvidenceNotes'],
    function(options) {
        // simply pass the options.params here
        options.rules['checkboxnocertificatecheck'] = options.params;
        options.messages['checkboxnocertificatecheck'] = options.message;
    }
);

//over18required

$.validator.addMethod("overeighteenrequired", function(value) {
    try {

        var d = $("#PersonalDetails_Day").val();
        var m = $("#PersonalDetails_Month").val();
        var y = $("#PersonalDetails_Year").val();

        var dbostr = y + "-" + m + "-" + d;

        var dbo = new Date(dbostr);

        var age = _calculateAge(dbo);

        return age > 18;
    } catch (error) {
        return false;
    }
});

$.validator.unobtrusive.adapters.add("overeighteenrequired", function(options) {
    options.rules["overeighteenrequired"] = true;
    options.messages["overeighteenrequired"] = options.message;
});

function _calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};


// AZ Additions
$(function() {
    $.validator.addMethod('date',
        function(value, element) {
            if (this.optional(element)) {
                return true;
            }
            var ok = true;
            try {
                $.datepicker.parseDate('dd/mm/yy', value);
            } catch (err) {
                ok = false;
            }
            return ok;
        });
    $(".datefield").datepicker({
        dateFormat: 'dd/mm/yy',
        changeYear: true
    });
});

$.validator.unobtrusive.adapters.add("dobrange", ['minage', 'maxage'], function(options) {
    options.rules["dobrange"] = options.params;
    options.messages["dobrange"] = options.message;
});

$.validator.addMethod("dobrange", function(value, element, params) {
    if (value.length > 0 && !IsDateWithSlash(value, params.minage, params.maxage))
        return false;
    else
        return true;
});


$.validator.unobtrusive.adapters.add(
    'requiredif', ['otherpropertyname', 'otherpropertyvalue'],
    function(options) {
        options.rules['requiredif'] = {
            dependentproperty: options.params['otherpropertyname'],
            targetvalue: options.params['otherpropertyvalue']
        };
        options.messages['requiredif'] = options.message;
    });