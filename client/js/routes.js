'use strict';

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
