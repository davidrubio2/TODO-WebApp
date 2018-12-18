'use strict';

var WebApp = angular.module('WebApp', ['ngRoute','AgregarTareaSession','ConsultarTareasSession']);
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
                templateUrl: 'Pag/ConsultarTareas.html',
                controller: 'ConsultarTareasSessionController'
            }).
            otherwise({
                redirectTo: '/Home'
            });
    }]);