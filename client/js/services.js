'use strict';

//1. Add services module
var gtcAngServicesModuleVariable = angular.module('gtcAngServicesModule', []);

//2. create Function(s) to be used in service module
// then return the functions to be accessed later
function ATypicalService($http, $window) {
    return ({
        login: Func1,
        logout: Func2
    });

    function Func1() {console.log("f1.");}

    function Func2() {console.log("f2.");}
}

function BTypicalService($http, $window) {
    return ({
        authenticate: func9
    });
    function func9() {console.log("f9."); return false;}
}

//3. inject the service in module definition like following
// var gtcAngularApp = angular.module('gtcAngular', ['ui.router', 'gtcAngServicesModule']);
// inject the service by-name in controllers. then we can call the functions as exported.

//4. create fucntions and
gtcAngServicesModuleVariable.factory('aTypicalService', ATypicalService);
ATypicalService.$inject = ['$http', '$window'];

gtcAngServicesModuleVariable.factory('bTypicalService', BTypicalService);
BTypicalService.$inject = ['$http', '$window'];