(function () {
    function controller (DayDetailsService) {
        var $ctrl = this;

        $ctrl.$onInit = function () {
            DayDetailsService
                .getOneUnit($ctrl.datetime)
                .then(bindUnit)
        };

        function bindUnit (unit) {
            $ctrl.unit = unit;
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