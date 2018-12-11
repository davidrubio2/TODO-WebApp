'use strict';

var WebApp = angular.module('WebApp', ['ngRoute','AgregarTareaSessions']);
WebApp.config(['$routeProvider',
    function (
        $routeProvider
    ) {
        $routeProvider.
            when('/Home', {
                templateUrl: 'Pag/AgregarTareas.html',
                controller: 'AgregarTareaSessionsController'

            }).
            when('/Consultas', {
                templateUrl: 'Pag/ConsultarTareas.html'
            }).
            otherwise({
                redirectTo: '/Home'
            });
    }]);