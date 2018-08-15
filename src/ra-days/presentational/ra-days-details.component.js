(function () {
    function controller () {

    }

    var component = {
        controller: controller,
        templateUrl: 'src/ra-days/presentational/ra-days-details.component.html',
        bindings: {
            unit: '<',
        },
    };

    angular
        .module('app')
        .component('raDaysDetails', component);
}());