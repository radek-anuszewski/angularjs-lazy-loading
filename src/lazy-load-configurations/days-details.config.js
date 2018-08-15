(function () {
    var app = angular.module('app');

    app.config(function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules: [{
                name: 'DaysDetails',
                files: [
                    'src/ra-days/services/day-details.service.js',
                    'src/ra-days/containers/ra-days-details-container.component.js',
                    'src/ra-days/presentational/ra-days-details.component.js',
                ],
            }],
        });
    });
}());