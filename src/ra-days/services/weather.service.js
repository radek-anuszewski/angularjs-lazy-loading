(function () {
    function Service (ApiService, CONSTANTS) {
        var cityId = CONSTANTS.cityId;
        var units = 'metric';

        function _getOnlyDays (data) {
            return data.list;
        }

        function getDays() {
            return ApiService
                .get('forecast', {
                    id: cityId,
                    units: units,
                })
                .then(_getOnlyDays);
        }

        return {
            getDays: getDays,
        };
    }

    angular
        .module('app')
        .service('WeatherService', Service);

}());