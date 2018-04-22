var page   = require('../pages/register-page.js');
var common = require('../helpers/common.js');
var helper = require('../helpers/helper.js');
var D      = require('../data-provider/all-data.js');
var using  = require('jasmine-data-provider');

describe('Registration page test cases', function () {

    beforeAll(function () {
        page.navigate_to_register_page();
    });

    it('1. Verify presence of all elements on Register page', function () {
        page.verify_all_elements_on_register_page();
    });

    it('2. Verify all input fields are blank', function () {
        page.verify_all_input_fields_are_blank();
    });

    it('3. Verify validation messages', function () {
        page.verify_validation_messages_on_required_fields(D.validationMessages);
    });

    // There is a bug in FidelityHiFi app. New user cannot be created after the validation on Register form was triggered.
    // My proposal is to skip test 3 when running all register tests together.
    it('4. Verify that creation of new user works properly', function () {
        page.enter_all_values_on_Register_form()
            .select_I_agree_and_subscribe_checkbox()
            .click_Register_button();
        browser.sleep(5000);
        page.verify_that_user_is_created_and_logged_in_successfully();
    });

    //Data driven tests
    using(D.passwordTestData, function (data, description) {
        it('Verify validation messages for Password and Confirm password input fields --> ' + description, function () {
            page.enter_password_and_confirm_password_values(data.password, data.confpass)
                .click_Register_button()
                .verify_validation_messages_on_password_and_confirm_password_inputs(data.messageOnPassword, data.messageOnConfirmPass)
        });
    });
});