angular.module('AgregarTareaSessionAppService', [])
        .factory('AgregarTareaSessionService', ['$http', function ($http) {
                var handler = {

                        GetConsultarResponsables: function () {
                                var url = 'api/ConsultarTodosResponsables'
                                return $http.get(url)

                        },

                        GetConsultarTodasCategorias: function () {
                                var url = 'api/ConsultarTodasCategorias'
                                return $http.get(url)

                        },
                        InsertarTarea: function (data) {
                                var url = 'api/NuevaTarea'
                                return $http.post(url, data)

                        },
                }

                return handler;
        }]);	