var page   = require('../pages/login-page.js');
var common = require('../helpers/common.js');
var helper = require('../helpers/helper.js');
var D      = require('../data-provider/all-data.js');

var Eyes = require("eyes.selenium").Eyes;
var eyes = new Eyes();
eyes.setApiKey("sCpn0rarqZl7y7SEnRhSbeh3EyxuzPLseeYdwLwW2gY110");


fdescribe('Login page test cases', function () {

    beforeEach(function () {
        page.navigate_to_login_page();
    });

    afterAll(function () {
        browser.driver.manage().deleteAllCookies();
    });

    it('1. Visual validation', function () {
        eyes.open(browser, 'Visual test', 'Login and Register page test');

        // Visual validation point #1
        eyes.checkWindow('Login page - default view');

        helper.waitAndClick(page.logInBtn);
        //Visual validation point #2
        eyes.checkWindow('Login page - validation triggered');

        if (D.selectedVersion === D.versions.mobile) {
            helper.waitAndClick(common.registerHereLinkMob);
        }
        else {
            helper.waitAndClick(common.registerLink);
        }
        //Visual validation point #3
        eyes.checkWindow('Register page - default view');

        // End visual testing. Validate visual correctness.
        eyes.close();
    });

    it('2. Log in as test user', function () {
        page.logIn(D.testUser[0], D.testUser[1]);
        browser.sleep(2000);
    });

});