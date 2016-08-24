'use strict';

/**
 * @ngdoc service
 * @name werocktechApp.search
 * @description
 * # search
 * Factory in the werocktechApp.
 */
angular.module('services.search', [])
  .factory('search', function () {
    return {
      findOneByName: function (series, name) {
        var episode = {};
        angular.forEach(series, function (item) {
          if (name === item.name) {
            episode = item;
          }
        });

        return episode;
      }
    };
  });
