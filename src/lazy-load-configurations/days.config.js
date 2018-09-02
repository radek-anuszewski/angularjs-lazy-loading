(function () {
    var app = angular.module('app');

    app.config(function($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            modules: [{
                name: 'Days',
                files: [
                    'src/ra-days/containers/ra-days-container.component.js',
                    'src/ra-days/presentational/ra-days.component.js',
                    'src/ra-days/presentational/ra-day-simplified.component.js',
                ],
            }],
        });
    });
}());