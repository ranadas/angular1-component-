'use strict';

var gtcAngularApp = angular.module('gtcAngular', ['ui.router']);

var routesConfig = function RoutesConfig($stateProvider, $urlRouterProvider) {
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
            templateUrl: 'partials/page2.html'
        })
        .state('page3', {
            url: '/page3',
            templateUrl: 'partials/page3.html'
        })
    ;
};
routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
gtcAngularApp.config(routesConfig);


function Page1Controller() {
    console.log('Page1 Controller ');
    var self = this;
    self.pageTitle = "Page One";
}