angular.module('ConsultarTareasSessionAppService', [])
        .factory('ConsultarTareasSessionService', ['$http', function ($http) {
            var handler = {

                ConsultarPorFiltros: function (data) {
                    var url = 'api/ConsultarPorFiltros'
                    return $http.post(url, data)

            },
        }

                return handler;
        }]);	