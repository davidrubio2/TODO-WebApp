var ConsultarTareasSession = angular.module("ConsultarTareasSession", ['ConsultarTareasSessionAppService']);
ConsultarTareasSession.controller("ConsultarTareasSessionController", ['$scope', 'ConsultarTareasSessionService', function ($scope, ConsultarTareasSessionService) {

    $scope.ConsultarTareasSessionAppService = []
    $scope.Responsable = "";
    $scope.Categorias = "";
    $scope.FechaDeinicio = "";
    $scope.FechadeFin = "";

    ConsultarTareasSessionService.GetConsultarTodasCategorias().then(function (response) {
        $scope.Categorias = response.data.data;

    });

    ConsultarTareasSessionService.GetConsultarResponsables().then(function (response) {
        $scope.Responsables = response.data.data;

    });


    $scope.Busqueda = function () {
        var data = {
            "IdResponsable": $scope.Responsable.val_id.toString(),
            "IdCategoria": $scope.Categoria.val_id.toString(),
            //"FechaInicio": $scope.FechaDeinicio.toString(),
          //  "FechaFin": $scope.FechadeFin.toString(),
          "FechaInicio":"" ,
          "FechaFin": "",
        }

        ConsultarTareasSessionService.ConsultarPorFiltros(data).then(function (response) {
            $scope.ConsultarTareasSessionAppService.push(response.data)
            $scope.TareaBusqueda = response.data.data;
        });

    }

}]);

