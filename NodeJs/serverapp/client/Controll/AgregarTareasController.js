var AgregarTareaSession = angular.module("AgregarTareaSession", ['AgregarTareaSessionAppService']);
AgregarTareaSession.controller("AgregarTareaSessionController", ['$scope', 'AgregarTareaSessionService', function ($scope, AgregarTareaSessionService) {
       

        $scope.AgregarTareaSessionAppService = []
        var dataSubTarea = [] ;
        AgregarTareaSessionService.GetConsultarTodasCategorias().then(function (response) {
                $scope.Categorias = response.data.data;
                $scope.Categoria = $scope.Categorias[0];
        });

        AgregarTareaSessionService.GetConsultarResponsables().then(function (response) {
                $scope.Responsables = response.data.data;
                $scope.Responsable = $scope.Responsables[0];
        });
        $scope.AgregarTarea = function () {
                var data = {
                    "TareaTitulo": $scope.titulo,
                    "IdResponsable": $scope.Responsable.val_id,
                    "FechaInicio": $scope.FechaDeinicio,
                    "FechaFin": $scope.FechadeFin,
                    "Porcentaje": $scope.PorcentajedeAvance,
                    "IdCategoria": $scope.Categoria.val_id,
                }
                AgregarTareaSessionService.InsertarTarea(data).then(function (response) {
                    $scope.AgregarTareaSessionAppService.push(response.data)
                    
                });
                
             }
             $scope.AgregarSubTarea = function () {
                dataSubTarea.push(  $scope.Responsable.val_id);
             
        }




}]);

