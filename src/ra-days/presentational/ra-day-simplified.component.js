(function () {
    function controller () {

    }

    var component = {
        controller: controller,
        templateUrl: 'src/ra-days/presentational/ra-day-simplified.component.html',
        bindings: {
            day: '<',
        },
    };

    angular
        .module('app')
        .component('raDaySimplified', component);
}());