'use strict';

describe('tests button click in order to navigate from page1, page2 & page3', function () {
    beforeEach(function () {
        browser.get('http://localhost:8080/');
    });

    it('should activate ng-click on pages[1-3]  and asserting the label.', function () {
        element(by.buttonText('Go to Page2')).click();
        expect(element(by.binding('vm.pageTitle')).getText()).toBe('This is Page Two!!');

        element(by.buttonText('Go to Page3')).click();
        expect(element(by.binding('vm.pageTitle')).getText()).toBe('This is Page Three!!');
        
        element(by.buttonText('Back to Page1')).click();
        expect(element(by.binding('vm.pageTitle')).getText()).toBe('This is Page One');
    });
});


describe('tests button click in order to navigate from page2 to page3', function () {
    beforeEach(function () {
        browser.get('http://localhost:8080/page2');
    });

    it('should activate ng-click on pages[1-3]  and asserting the label.', function () {
        element(by.buttonText('Go to Page3')).click();
        expect(element(by.binding('vm.pageTitle')).getText()).toBe('This is Page Three!!');
    });
});

describe('tests button click in order to navigate from page2 to page3', function () {
    beforeEach(function () {
        browser.get('http://localhost:8080/page3');
    });

    it('should activate ng-click on pages[1-3]  and asserting the label.', function () {
        element(by.buttonText('Back to Page1')).click();
        expect(element(by.binding('vm.pageTitle')).getText()).toBe('This is Page One');
    });
});