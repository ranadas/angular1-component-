'use strict';

describe('tests button click in order to navigate from page1, page2 & page3', function () {
    beforeEach(function () {
        browser.get('http://localhost:8080/');
    });

    it('should activate ng-click on pages[1-3]  and asserting the label.', function () {
        element(by.buttonText('Go to Page2')).click();
        expect(element(by.binding('vm.pageTitle')).getText()).toBe('Page Two!!');

        element(by.buttonText('Go to Page3')).click();
        expect(element(by.binding('vm.pageTitle')).getText()).toBe('Page Three!!');
        
        element(by.buttonText('Back to Page1')).click();
        expect(element(by.binding('vm.pageTitle')).getText()).toBe('Page One');
    });
});
