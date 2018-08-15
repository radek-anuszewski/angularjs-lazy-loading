(function () {
    /**
     * Factory function: https://stackoverflow.com/a/38665151/3368498
     */
    function _filterByDatetimeFactory (datetime) {
        return function getDateByDatetime (day) {
            return day.dt_txt === datetime;
        }
    }

    function _getUnitByDatetimeFactory (datetime) {
        return function (days) {
            var filtered = days
                .filter(_filterByDatetimeFactory(datetime));

            return filtered[0];
        }
    }

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

        function getOneUnit (datetime) {
            return getDays()
                .then(_getUnitByDatetimeFactory(datetime));
        }

        return {
            getDays: getDays,
            getOneUnit: getOneUnit,
        };
    }

    angular
        .module('app')
        .service('WeatherService', Service);

}());