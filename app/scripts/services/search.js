'use strict';

/**
 * @ngdoc service
 * @name werocktechApp.search
 * @description
 * # search
 * Factory in the werocktechApp.
 */
angular.module('werocktechApp')
  .factory('search', function () {
    // Service logic
    // ...

    // Public API here
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
