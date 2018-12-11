'use strict';

var WebApp = angular.module('WebApp', ['ngRoute']);
WebApp.config(['$routeProvider',
    function (
        $routeProvider
    ) {
        $routeProvider.
            when('/Home', {
                templateUrl: 'Pag/AgregarTareas.html'
            }).
            when('/Consultas', {
                templateUrl: 'Pag/ConsultarTareas.html'
            }).
            otherwise({
                redirectTo: '/Home'
            });
    }]);