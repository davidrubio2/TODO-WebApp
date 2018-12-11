var AgregarTareaSession = angular.module("AgregarTareaSession", ['AgregarTareaSessionAppService']);
AgregarTareaSession.controller("AgregarTareaSessionController", ['$scope', 'AgregarTareaSessionService', function ($scope, AgregarTareaSessionService) {
    
        $scope.AgregarTareaSessionAppService = []
        //alert("I am an alert box!");

               AgregarTareaSessionService.GetConsultarResponsables().then(function (response) {
                $scope.Responsables = response.data.data;
        });
        

}]);

