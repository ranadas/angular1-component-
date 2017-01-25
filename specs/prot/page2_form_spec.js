'use strict';
var p2Page = require('./pageObj/page2_po.js');

describe('tests on page2 around form input and validations', function () {
    beforeEach(function () {
        browser.get('http://localhost:8080/page2');
    });

    it('ensures username and password can be set', function () {
        console.log('setting username & password');

        // Find page elements
        var userNameField = element(by.model('vm.user.username'));
        var userPassField = element(by.model('vm.user.password'));

        userNameField.sendKeys('ranadas');
        userPassField.sendKeys('Password');

        element(by.buttonText("Submit")).click();
        // the page is directed to page3 now.
        // TODO : expected to be 'Page Three!!' not 'This is Page Three!!'.
        expect(element(by.binding('vm.pageTitle')).getText()).toBe('This is Page Three!!');
        //browser.pause();
    });
});