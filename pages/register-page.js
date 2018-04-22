'use strict';

var helper    = require('../helpers/helper.js');
var common    = require('../helpers/common.js');
var loginPage = require('../pages/login-page.js');
var D         = require('../data-provider/all-data');

var title                    = $('#title');
var firstName                = $('#first_name');
var lastName                 = $('#last_name');
var email                    = $('#email');
var phone                    = $('#phone');
var mobile                   = $('#mobile');
var password                 = $('#password');
var confirmPassword          = $('#passconf');
var iAgreeCheckbox           = $('#terms');
var subscribeCheckbox        = $('#mailing');
var firstNameValMsg          = $('#first_name-error');
var lastNameValMsg           = $('#last_name-error');
var emailValMsg              = $('#email-error');
var phoneValMsg              = $('#phone-error');
var passwordValMsg           = $('#password-error');
var confirmPasswordValMsg    = $('#passconf-error');
var agreeTermsValMsg         = $('#terms_agree-error');
var registerButton           = $('#register_submit');
var resetButton              = element(by.buttonText('Reset'));
var validationErrors         = $$('.field-validation-error');
var registrationCompletedMsg = $('.result');
var serverValidationError    = $('.message-error');

var allInputFields = [
    title,
    firstName,
    lastName,
    email,
    phone,
    mobile,
    password,
    confirmPassword,
];

var allCheckboxes = [
    iAgreeCheckbox,
    subscribeCheckbox
];

var allButtons = [
    registerButton,
    resetButton
];

var allValidationMsgs = [
    firstNameValMsg,
    lastNameValMsg,
    emailValMsg,
    phoneValMsg,
    passwordValMsg,
    confirmPasswordValMsg,
    agreeTermsValMsg
];


var RegisterPage = function () {

    this.navigate_to_register_page = function () {
        browser.get(D.baseUrl);
        common.clickCloseBtn();
        if (D.selectedVersion === D.versions.mobile) {
            helper.waitAndClick(common.toggleBtnMob);
            helper.waitAndClick(common.loginRegisterLinkMob);
            helper.waitAndClick(common.registerHereLinkMob);
        }
        else {
            helper.waitAndClick(common.registerLink);
        }
        return this;
    };

    this.verify_all_elements_on_register_page = function () {
        helper.waitPresence(registerButton);
        helper.verifyCurrentUrl(D.registerURL);
        common.verifyH2Header('Register');
        helper.verifyPresenceOfAllElements(allInputFields);
        helper.verifyPresenceOfAllElements(allCheckboxes);
        helper.verifyPresenceOfAllElements(allButtons);
        helper.verifyElementIsNotSelected(iAgreeCheckbox);
        helper.verifyElementIsNotSelected(subscribeCheckbox);
        return this;
    };

    this.verify_all_input_fields_are_blank = function () {
        helper.verifyAllInputFieldsAreBlank(allInputFields);
        return this;
    };

    this.verify_validation_messages_on_required_fields = function (validationMsgs) {
        helper.waitAndClick(registerButton);
        helper.waitVisibility(firstNameValMsg);
        helper.verifyTextFields(allValidationMsgs, validationMsgs);
        return this;
    };

    this.enter_all_values_on_Register_form = function () {
        helper.enterValuesToAllInputFields(allInputFields, D.inputValuesOnRegisterPage);
        console.log('Creating user with following email: ' + D.getRandomEmail());
        return this;
    };

    this.select_I_agree_and_subscribe_checkbox = function () {
        helper.waitAndClick(iAgreeCheckbox);
        helper.waitAndClick(subscribeCheckbox);
        return this;
    };

    this.click_Register_button = function () {
        helper.waitAndClick(registerButton);
        return this;
    };

    this.verify_that_user_is_created_and_logged_in_successfully = function () {
        helper.waitInvisibility(registerButton);
        helper.verifyElementIsNotVisible(registerButton);
        helper.verifyElementIsNotVisible(resetButton);
        helper.verifyElementIsNotVisible(common.registerLink);
        helper.verifyElementIsNotVisible(common.loginLink);
        helper.verifyText(common.successAlert, 'Your email address has been added to our mailing list.');
        helper.verifyCssValue(common.successAlert, 'background-color', 'rgba(93, 164, 35, 1)');
        return this;
    };

    this.enter_password_and_confirm_password_values = function (pass, confpass) {
        helper.clearAndEnterValue(password, pass);
        helper.clearAndEnterValue(confirmPassword, confpass);
        return this;
    };

    this.verify_validation_messages_on_password_and_confirm_password_inputs = function (text1, text2) {
        helper.verifyText(passwordValMsg, text1);
        helper.verifyText(confirmPasswordValMsg, text2);
        return this;
    };
};

module.exports = new RegisterPage();