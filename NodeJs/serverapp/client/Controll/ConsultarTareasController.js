var ConsultarTareasSession = angular.module("ConsultarTareasSession", ['ConsultarTareasSessionAppService']);
ConsultarTareasSession.controller("ConsultarTareasSessionController", ['$scope', 'ConsultarTareasSessionService', function ($scope, ConsultarTareasSessionService) {
    
        $scope.ConsultarTareasSessionAppService = []
        //alert("I am an alert box!");
        var data = {
            "IdResponsable": "",
            "IdCategoria": "",
            "FechaInicio": "",
            "FechaFin": "",
        }
        var fetchHistorial = function() {
            ConsultarTareasSessionService.ConsultarPorFiltros(data).then(function (response) {
                $scope.ConsultarTareasSessionAppService.push(response.data)
                $scope.TareaBusqueda = response.data.data;
     
        })
    }

    $scope.Busqueda = function () {

        fetchHistorial();
        
     }

}]);

