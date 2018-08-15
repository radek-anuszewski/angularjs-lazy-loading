(function () {
    function controller () {

    }

    var component = {
        controller: controller,
        templateUrl: 'src/ra-days/presentational/ra-days.component.html',
        bindings: {
            days: '<',
        },
    };

    angular
        .module('app')
        .component('raDays', component);
}());