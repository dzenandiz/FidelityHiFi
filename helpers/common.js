'use strict';

var helper = require('./helper.js');
var D      = require('../data-provider/all-data.js');
var EC     = protractor.ExpectedConditions;

//Elements
var loginLink            = element(by.linkText('Login'));
var registerLink         = element(by.linkText('Register'));
var mainContent          = $('#main_content');
var h2header             = element.all(by.tagName('h2')).get(0);
var svgIcon              = $('#box-session');
var logOutLink           = element(by.linkText('Log Out'));
var successAlert         = $('.alert-box');
var toggleBtnMob         = $('.left-off-canvas-toggle');
var loginRegisterLinkMob = element(by.linkText('Login / Register'));
var registerHereLinkMob  = element(by.linkText('Register here'));
var closeBtn             = $('#eu_cookie_button');

exports.registerLink         = registerLink;
exports.loginLink            = loginLink;
exports.mainContent          = mainContent;
exports.successAlert         = successAlert;
exports.toggleBtnMob         = toggleBtnMob;
exports.loginRegisterLinkMob = loginRegisterLinkMob;
exports.registerHereLinkMob  = registerHereLinkMob;
exports.closeBtn             = closeBtn;

exports.verifyH2Header = function (string) {
    helper.verifyText(h2header, string);
};

exports.logOut = function () {
    helper.waitAndClick(svgIcon);
    browser.sleep(5000);
    helper.waitAndClick(logOutLink);
};

exports.clickCloseBtn = function () {
    helper.waitAndClick(closeBtn);
};
