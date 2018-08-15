(function () {
    function controller (WeatherService) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            WeatherService
                .getDays()
                .then(bindDays)
        };

        function bindDays (days) {
            $ctrl.days = days;
        }
    }

    var component = {
        controller: controller,
        templateUrl: 'src/ra-days/containers/ra-days-container.component.html',
    };

    angular
        .module('app')
        .component('raDaysContainer', component);
}());