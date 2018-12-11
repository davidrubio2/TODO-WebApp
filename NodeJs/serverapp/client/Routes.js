'use strict';

var WebApp = angular.module('WebApp', ['ngRoute','AgregarTareaSession']);
WebApp.config(['$routeProvider',
    function (
        $routeProvider
    ) {
        $routeProvider.
            when('/Home', {
                templateUrl: 'Pag/AgregarTareas.html',
                controller: 'AgregarTareaSessionController'

            }).
            when('/Consultas', {
                templateUrl: 'Pag/ConsultarTareas.html'
            }).
            otherwise({
                redirectTo: '/Home'
            });
    }]);