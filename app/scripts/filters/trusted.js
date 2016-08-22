'use strict';

/**
 * @ngdoc filter
 * @name werocktechApp.filter:trusted
 * @function
 * @description
 * # trusted
 * Filter in the werocktechApp.
 */
angular.module('werocktechApp')
  .filter('trusted', function ($sce) {
    return function (input) {
      return $sce.trustAsResourceUrl(input);
    };
  });
