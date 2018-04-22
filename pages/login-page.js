'use strict';

var helper = require('../helpers/helper.js');
var common = require('../helpers/common.js');
var D      = require('../data-provider/all-data');

var emailAddress = $('#login-username');
var password     = $('#login-password');
var logInBtn     = element(by.buttonText('Log In'));


var LoginPage = function () {

    this.emailAddress = emailAddress;
    this.password     = password;
    this.logInBtn     = logInBtn;

    this.navigate_to_login_page = function () {
        browser.get(D.loginURL);
    };

    this.logIn = function (email, pass) {
        helper.clearAndEnterValue(emailAddress, email);
        helper.clearAndEnterValue(password, pass);
        helper.waitAndClick(logInBtn);
        return this;
    };
};

module.exports = new LoginPage();