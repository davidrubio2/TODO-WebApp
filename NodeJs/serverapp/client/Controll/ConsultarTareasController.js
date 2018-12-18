var ConsultarTareasSession = angular.module("ConsultarTareasSession", ['ConsultarTareasSessionAppService']);
ConsultarTareasSession.controller("ConsultarTareasSessionController", ['$scope', 'ConsultarTareasSessionService', function ($scope, ConsultarTareasSessionService) {
    
        $scope.ConsultarTareasSessionAppService = []

        $scope.Responsable = "";
      
    $scope.Busqueda = function () {
        var data = {
            "IdResponsable": $scope.Responsable,
            "IdCategoria": "",
            "FechaInicio": "",
            "FechaFin": "",
        }
        ConsultarTareasSessionService.ConsultarPorFiltros(data).then(function (response) {
            $scope.ConsultarTareasSessionAppService.push(response.data)
            $scope.TareaBusqueda = response.data.data;
        });
        
     }

}]);

