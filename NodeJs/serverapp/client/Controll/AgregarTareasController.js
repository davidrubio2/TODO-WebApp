var AgregarTareaSession = angular.module("AgregarTareaSession", ['AgregarTareaSessionAppService']);
AgregarTareaSession.controller("AgregarTareaSessionController", ['$scope', 'AgregarTareaSessionService', function ($scope, AgregarTareaSessionService) {

        $scope.AgregarTareaSessionAppService = []
        
        AgregarTareaSessionService.GetConsultarTodasCategorias().then(function (response) {
                $scope.Categoria = response.data.data;
        });

        AgregarTareaSessionService.GetConsultarResponsables().then(function (response) {
                $scope.Responsables = response.data.data;
        });





}]);

