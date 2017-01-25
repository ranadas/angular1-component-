'use strict';

var gtcAngularApp = angular.module('gtcAngular', ['ui.router', 'gtcAngServicesModule']);

gtcAngularApp.config(routesConfig);

gtcAngularApp.run(['$rootScope', function ($scope) {
    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
    });
}]);