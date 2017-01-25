'use strict';


function Page1Controller($location) {
    console.log('Page1 Controller ');
    var self = this;
    self.pageTitle = "Page One";

    self.goToLink = function (url) {
        console.log('Navigating to '+url);
        $location.path(url);
    }
}
Page1Controller.$inject = ['$location'];


function Page2Controller($location) {
    console.log('Page2  Controller ');
    var self = this;
    self.pageTitle = "Page Two!!";
    self.errorMessage = "!";
    self.passwordStrength = /^[a-zA-Z]\w{3,14}$/;

    self.goToLink = function (url) {
        console.log('Navigating to '+url);
        $location.path(url);
    };

    self.submitForm = function(isValid) {
        console.log('User clicked submit with :', self.user);
        if (isValid) {
            console.log('Submit form success, navigating to page3.');
            $location.path('/page3');
        }
    }
}
Page2Controller.$inject = ['$location'];

function Page3Controller($location, service1) {
    console.log('Page3  Controller ');
    var self = this;
    self.pageTitle = "Page Three!!";
    self.searchPattern = /^[a-zA-Z0-9]*$/;
    self.goToLink = function (url) {
        console.log('Navigating to '+url);
        service1.login();
        $location.path(url);
    };

    self.submitForm = function(isValid) {
        console.log('User clicked submit with :', self.user);
        if (isValid) {
            console.log('Submit form success, navigating to page3.');
            $location.path('/page3');
        }
    };

    self.makeSearch = function(isValid) {
        console.log('Search in page3.');
    }
}
Page3Controller.$inject = ['$location', 'aTypicalService'];