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

    self.goToLink = function (url) {
        console.log('Navigating to '+url);
        $location.path(url);
    }
}
Page2Controller.$inject = ['$location'];

function Page3Controller($location, service1) {
    console.log('Page3  Controller ');
    var self = this;
    self.pageTitle = "Page Three!!";

    self.goToLink = function (url) {
        console.log('Navigating to '+url);
        service1.login();
        $location.path(url);
    }
}
Page3Controller.$inject = ['$location', 'aTypicalService'];