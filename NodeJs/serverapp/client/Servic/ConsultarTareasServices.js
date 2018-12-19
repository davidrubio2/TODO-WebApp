angular.module('ConsultarTareasSessionAppService', [])
        .factory('ConsultarTareasSessionService', ['$http', function ($http) {
            var handler = {

                ConsultarPorFiltros: function (data) {
                    var url = 'api/ConsultarPorFiltros'
                    return $http.post(url, data)

            },
            GetConsultarResponsables: function () {
                    var url = 'api/ConsultarTodosResponsables'
                    return $http.get(url)

            },

            GetConsultarTodasCategorias: function () {
                    var url = 'api/ConsultarTodasCategorias'
                    return $http.get(url)

            },
        }

                return handler;
        }]);	