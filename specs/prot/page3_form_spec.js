'use strict';
var p2Page = require('./pageObj/page2_po.js');

describe('page3 form input and validations', function () {
    beforeEach(function () {
        browser.get('http://localhost:8080/page3');
    });

    it('should have a proper page tab', function () {
        var viewName = browser.getTitle();
        viewName.then(function (viewTitle) {
                expect(viewTitle).toEqual('GTC angular skel title')
            }
        );
        //browser.pause();
    });

    it('should have an error for bad characters', function () {
        var badSearch = '@@';

        var searchField = element(by.model('vm.search'));
        searchField.sendKeys(badSearch);
        var patternMessage = element(by.css('[ng-message="pattern"]')).getText();
        console.log('patternMessage: ' + patternMessage);
        expect(patternMessage).toContain('Numbers');
        expect(patternMessage).toBe('Numbers and Letters Only');

    });


    it('should have an error for too long search', function () {
        var badSearch = 'RanaPratapDas';

        var searchField = element(by.model('vm.search'));
        searchField.sendKeys(badSearch);
        var patternMessage = element(by.css('[ng-message="maxlength"]')).getText();
        console.log('patternMessage: ' + patternMessage);
        expect(patternMessage).toBe('Cannot Exceed 10 characters');

    });
});