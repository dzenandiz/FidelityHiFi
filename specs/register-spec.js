var page   = require('../pages/register-page.js');
var common = require('../helpers/common.js');
var helper = require('../helpers/helper.js');
var D      = require('../data-provider/all-data.js');
var using  = require('jasmine-data-provider');

fdescribe('Registration page test cases', function () {

    beforeAll(function () {
        page.navigate_to_register_page();
    });

    it('1. Verify presence of all elements on Register page', function () {
        page.verify_all_elements_on_register_page();
    });

    it('2. Verify all input fields are blank', function () {
        page.verify_all_input_fields_are_blank();
    });

    xit('3. Verify validation messages', function () {
        page.verify_validation_messages_on_required_fields(D.validationMessages);
    });

    it('4. Verify that all values can be entered on Register page ', function () {
        page.enter_all_values_on_Register_form()
            .select_I_agree_and_subscribe_checkbox()
    });

    //Data driven tests
    using(D.passwordTestData, function (data, description) {
        it('Verify validation messages for Password and Confirm password input fields --> ' + description, function () {
            page.enter_password_and_confirm_password_values(data.password, data.confpass)
                .verify_validation_messages_on_password_and_confirm_password_inputs(data.messageOnPassword, data.messageOnConfirmPass)
        });
    });
});