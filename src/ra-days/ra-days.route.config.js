(function () {
    function config ($stateProvider, $urlRouterProvider) {
        var mainState = {
            name: 'days',
            component: 'raDaysContainer',
            url: '/days',
        };

        var detailsState = {
            name: 'days-details',
            component: 'raDaysDetailsContainer',
            url: '/days/:datetime',
            bindings: {
                datetime: 'datetime',
            },
            resolve: {
                datetime: ['$stateParams', function ($stateParams) {
                    return $stateParams.datetime;
                }],
                loadService: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('src/ra-days/services/day-details.service.js');
                }],
                loadContainer: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('src/ra-days/containers/ra-days-details-container.component.js')
                }],
                loadComponent: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('src/ra-days/presentational/ra-days-details.component.js')
                }],
            },
        };

        $stateProvider.state(mainState);
        $stateProvider.state(detailsState);

        $urlRouterProvider.otherwise('/days');
    }

    angular
        .module('app')
        .config(config);
}());