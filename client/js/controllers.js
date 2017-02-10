'use strict';


function Page1Controller($location) {
    console.log('Page1 Controller ');
    var self = this;
    self.pageTitle = "Page One";

    self.goToLink = function (url) {
        console.log('Navigating to '+url);
        $location.path(url);
    };
    self.saveApplication = function () {
        console.log('Saving new Application with ' + JSON.stringify(self.choiceSet));

    };

    self.choiceSet = {choices: []};
    self.quest = {};
    self.choiceSet.choices = [];
    self.addNewChoice = function () {
        self.choiceSet.choices.push('');
    };

    self.removeChoice = function (z) {
        //var lastItem = $scope.choiceSet.choices.length - 1;
        self.choiceSet.choices.splice(z,1);
    };


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

function DialogPageController($location, ngDialog, $scope) {
    console.log('DialogPage  Controller ');
    var self = this;
    self.pageTitle = "ngDialog!!";
    self.appl = {name: "rana", ph: '098765421', ad: '39 wellington'};
    self.near = ['one', 'two', 'three'];
    $scope.value = self.appl;
    $scope.value2 = self.near;
    self.clickToOpen = function() {
        ngDialog.open({
            template: 'partials/popupTmpl.html',
            className: 'ngdialog-theme-default',
            //controller: DialogController,
            //controllerAs: "vm",
            scope : $scope
        });
    }
}
DialogPageController.$inject = ['$location', 'ngDialog', '$scope'];


//function DialogController($location) {
//    console.log('Dialog Controller ');
//}
//DialogController.$inject = ['$location'];