'use strict';

/**
 * @ngdoc service
 * @name werocktechApp.series
 * @description
 * # series
 * Service in the werocktechApp.
 */
angular.module('services.series', [])
  .service('series', function ($http) {
    var self = this;

    this.findAll = function () {
      return $http({
        method: 'GET',
        url: '/data/series.js'
      });
    };

  });
