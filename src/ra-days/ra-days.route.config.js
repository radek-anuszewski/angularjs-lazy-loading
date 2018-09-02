(function () {
    function config ($stateProvider, $urlRouterProvider) {
        var mainState = {
            name: 'days',
            component: 'raDaysContainer',
            url: '/days',
            resolve: {
                loadDependencies: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('Days');
                }],
            }
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
                loadDependencies: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('DaysDetails');
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