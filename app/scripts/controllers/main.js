'use strict';

/**
 * @ngdoc function
 * @name werocktechApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the werocktechApp
 */
angular.module('werocktech.main', [])
  .controller('MainCtrl', function (series, $mdDialog) {
    var self = this;

    self.filterByTag = function (keyword) {
      self.search = {
        'query': keyword
      };
    };

    self.getSeries = function () {
      series.findAll().then(function successCallback(response) {
        self.series = response.data;
      }, function errorCallback(response) {
        console.log(response.data);
      });
    };

    self.search = function (ev, name) {
      $mdDialog.show({
          controller: 'EpisodeCtrl',
          controllerAs: 'episode',
          templateUrl: '/views/template/episode.tmpl.html',
          locals: {
            name: name
          },
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true,
          fullscreen: self.customFullscreen // Only for -xs, -sm breakpoints.
        });
    };

  });
