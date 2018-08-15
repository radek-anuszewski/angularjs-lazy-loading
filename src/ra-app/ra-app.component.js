(function () {
    function controller () {

    }

    var component = {
        controller: controller,
        templateUrl: 'src/ra-app/ra-app.component.html',
    };

    angular
        .module('app')
        .component('raApp', component);
}());