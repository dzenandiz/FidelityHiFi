var D = exports;

D.baseUrl         = 'https://demo.cubecart.com/cc6/';
D.loginURL        = 'https://demo.cubecart.com/cc6/login.html';
D.registerURL     = 'https://demo.cubecart.com/cc6/register.html';
D.randomNo        = Math.floor(1000000 * Math.random() + 1).toString();
D.selectedVersion = '';

D.getRandomEmail = function () {
    return randomEmail = 'john.smith' + D.randomNo + '@mailinator.com';
};

D.versions = {
    mobile: 'Mobile',
    desktop: 'Desktop'
};

D.validationMessages = [
    'Please enter your first name.',
    'Please enter your last name.',
    'Please enter a valid email address.',
    'Please enter a valid telephone number.',
    'Please enter a password.',
    'Your passwords do not match.',
    'Please agree to the Terms & Conditions.'
];

D.inputValuesOnRegisterPage = [
    'Test title',
    'John',
    'Smith',
    D.getRandomEmail(),
    '1999222888',
    '2999222888',
    'test123',
    'test123',
];

D.testUser = [
    'noreply2@mailinator.com',
    'test123',
];

D.passwordTestData = {
    'Password length test': {
        password: 'test',
        confpass: 'teet',
        messageOnPassword: 'Please enter at least 6 characters for your password.',
        messageOnConfirmPass: 'Your passwords do not match.'
    },
    'Password empty values test': {
        password: '',
        confpass: '',
        messageOnPassword: 'Please enter a password.',
        messageOnConfirmPass: 'Your passwords do not match.'
    }
};