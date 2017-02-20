'use strict';

var gtcAngularApp = angular.module('gtcAngular', ['ui.router', 'gtcAngServicesModule', 'ngMessages', 'ngDialog']);

gtcAngularApp.config(routesConfig);

gtcAngularApp.run(['$rootScope', function ($scope) {
    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
    });
}]);


// component's name camelCased, when we will want to use the component we will write it using hyphens
// 1. simple component with inline template
// to use just say <hello-world>
gtcAngularApp.component('helloWorld', {
    template: "<h2>Hello World ! Rdas </h2>"
});

// 2. component with inline template with 1 string binding and a controller function bound to button click.
// to use just say <hello-world2 name="Rana Das"></hello-world2>
gtcAngularApp.component('helloWorld2', {
    template: "<div><span>Hello World, " +
    "{{$ctrl.name}}!! </span> " +
     "<button class='btn btn-group-xs' ng-click='$ctrl.butClick()'>ok</button>"+
    "</div>",
    bindings: { name: '@' },
    controller: function(){
        var self = this;
        self.namexx='this is  so cool.';
        self.butClick = function (){
            console.log('woo hoo, clicked button in component');
        }
    }
});

// 3. component with template as url with 2 string bindings
//to use, pass both bindings<footer-bar year="2019" copyname="Rana P Das"></footer-bar>
gtcAngularApp.component('footerBar', {
    templateUrl: "footer.html",
    bindings:{
        year:'@',
        copyname:'@'
    }
});
