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

    function Service (WeatherService) {
        function getOneUnit (datetime) {
            return WeatherService
                .getDays()
                .then(_getUnitByDatetimeFactory(datetime));
        }

        return {
            getOneUnit: getOneUnit,
        };
    }

    angular
        .module('app')
        .service('DayDetailsService', Service);

}());