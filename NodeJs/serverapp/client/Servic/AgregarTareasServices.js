angular.module('AgregarTareaSessionAppService', [])
        .factory('AgregarTareaSessionService', ['$http', function ($http) {
            var handler = {

                GetConsultarResponsables: function () {
                        var url = 'api/ConsultarTodosResponsables'
                        return $http.get(url)

                },
        }

                return handler;
        }]);	