exports.config = {

    framework: 'jasmine2',
    multiCapabilities: [

        // Available options for browserName: 'chrome', 'firefox', 'MicrosoftEdge'
        // Set shardTestFiles to 'true' if you want to run multiple instances of the same browser

        {
            browserName: 'chrome',
            specs: ['./specs/*'],
            shardTestFiles: false,
            maxInstances: 2,
            elementScrollBehavior: 1,
            nativeEvents: false,
        },

        //  Mobile Emulation in Chrome
        // {
        //     browserName: 'chrome',
        //     chromeOptions: {mobileEmulation: {deviceName: 'Nexus 5'}},
        //     specs: ['./specs/*.js',],
        //     shardTestFiles: false,
        //     maxInstances: 2,
        //     params: 'mobile version'
        // },

        // {
        //     browserName: 'MicrosoftEdge',
        //     specs: ['./specs/*'],
        //     shardTestFiles: false,
        //     maxInstances: 2,
        //     elementScrollBehavior: 1,
        //     nativeEvents: false,
        // },

    ],

    directConnect: false,

    localSeleniumStandaloneOpts:
        {
            jvmArgs: [
                '-Dwebdriver.edge.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/MicrosoftWebDriver.exe',
                '-Dwebdriver.gecko.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.20.1.exe',
                '-Dwebdriver.chrome.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.38.exe',
                '-Dwebdriver.ie.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer.exe'
            ]
        },

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000,
    },

    onPrepare: function () {
        // returning the promise makes protractor wait for the reporter config before executing tests
        return global.browser.getProcessedConfig().then(function (config) {
            browser.manage().window().maximize();

            var D               = require('./data-provider/all-data.js');
            var versionOfTheApp = config.capabilities.params;

            browser.ignoreSynchronization = true;

            if (versionOfTheApp === 'mobile version') {
                D.selectedVersion = D.versions.mobile;
                browser.driver.manage().window().setSize(380, 730);
            }
            else {
                D.selectedVersion = D.versions.desktop;
            }

        });
    },

    onComplete: function () {
        browser.driver.quit();
    },

    plugins: [{
        package: 'protractor-screenshoter-plugin',
        screenshotPath: './report-with-screenshots',
        screenshotOnExpect: 'failure+success',
        screenshotOnSpec: 'none',
        withLogs: false,
        writeReportFreq: 'asap',
        imageToAscii: 'none',
        clearFoldersBeforeTest: true
    }],

};