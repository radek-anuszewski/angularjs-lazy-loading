(function () {
    function controller (WeatherService) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            WeatherService
                .getOneUnit($ctrl.datetime)
                .then(bindUnit)
        };

        function bindUnit (unit) {
            $ctrl.unit = unit;
            alert(JSON.stringify($ctrl.unit))
        }
    }

    var component = {
        controller: controller,
        templateUrl: 'src/ra-days/containers/ra-days-details-container.component.html',
        bindings: {
            'datetime': '<',
        },
    };

    angular
        .module('app')
        .component('raDaysDetailsContainer', component);
}());