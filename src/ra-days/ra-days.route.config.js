(function () {
    function config ($stateProvider, $urlRouterProvider) {
        var mainState = {
            name: 'days',
            component: 'raDaysContainer',
            url: '/days',
        };

        $stateProvider.state(mainState);

        $urlRouterProvider.otherwise('/days');
    }

    angular
        .module('app')
        .config(config);
}());