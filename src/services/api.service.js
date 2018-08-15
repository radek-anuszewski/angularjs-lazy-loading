(function () {
    function ApiService ($http, $q) {
        var apiKey = '';
        var apiUrl = 'http://api.openweathermap.org/data/2.5/';
        var cache = {};

        function _createQueryString (paramsForQueryString) {
            return Object.keys(paramsForQueryString).reduce(function (previousValue, key) {
                return previousValue + '&' + key + '=' + paramsForQueryString[key];
            }, '');
        }


        function _getOnlyData (response) {
            return response.data;
        }

        function get (url, paramsForQueryString) {
            var queryString = _createQueryString(paramsForQueryString);
            var fullUrl = apiUrl + url + '?APPID=' + apiKey + queryString;

            if (cache[fullUrl]) {
                return $q
                    .when(cache[fullUrl]);
            }

            return $http
                .get(fullUrl)
                .then(_getOnlyData)
                .then(function (value) {
                    cache[fullUrl] = value;
                    return value;
                });
        }

        return {
            get: get,
        };
    }

    angular
        .module('app')
        .factory('ApiService', ApiService);
}());