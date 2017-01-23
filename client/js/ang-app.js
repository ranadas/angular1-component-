'use strict';

var gtcAngularApp = angular.module('gtcAngular', ['ui.router', 'gtcAngServicesModule', 'validation', 'validation.rule']);

var routesConfig = function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('page1');

    $stateProvider
        .state('page1', {
            url: '/page1',
            templateUrl: 'partials/page1.html',
            controller: Page1Controller,
            controllerAs: 'vm'
        })
        .state('page2', {
            url: '/page2',
            templateUrl: 'partials/page2.html',
            controller: Page2Controller,
            controllerAs: 'vm'
        })
        .state('page3', {
            url: '/page3',
            templateUrl: 'partials/page3.html',
            controller: Page3Controller,
            controllerAs: 'vm'
        })
    ;

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
};
routesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
gtcAngularApp.config(routesConfig);


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

gtcAngularApp.run(['$rootScope', function ($scope) {
    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
    });
}]);