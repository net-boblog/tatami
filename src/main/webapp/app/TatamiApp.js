var TatamiApp = angular.module('TatamiApp', [ 
    'HomeModule',
    'ngRoute',
    'ngResource',
    'pascalprecht.translate'
]);

/*
    'StatusModule', 
    'PreferenceModule',
*/

TatamiApp.config(['$resourceProvider', '$routeProvider', '$locationProvider', 
    function($resourceProvider, $routeProvider, $locationProvider) {
    
    // Don't strip trailing slashes from REST URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;

    $routeProvider
        .when('/', {
            templateUrl: 'app/components/home/HomeView.html'
        });

    $locationProvider.html5Mode(true);
}]);