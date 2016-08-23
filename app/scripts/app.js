'use strict';

/**
 * @ngdoc overview
 * @name werocktechApp
 * @description
 * # werocktechApp
 *
 * Main module of the application.
 */
angular
  .module('werocktechApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',

    'filters.trusted',
    
    'services.series',

    'werocktech.search',
    'werocktech.about',
    'werocktech.main'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'mc'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  }])
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('purple')
      .accentPalette('blue-grey');
  }]);
