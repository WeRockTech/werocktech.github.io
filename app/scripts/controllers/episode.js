'use strict';

/**
 * @ngdoc function
 * @name werocktechApp.controller:EpisodeCtrl
 * @description
 * # DetailsCtrl
 * Controller of the werocktechApp
 */
angular.module('werocktech.episode', [])
  .controller('EpisodeCtrl', function ($mdDialog, name, series, search) {
    var self = this;

    self.findOneByName = function () {
      series.findAll().then(function successCallback(response) {
        self.details = search.findOneByName(response.data, name);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    self.cancel = function () {
      $mdDialog.cancel();
    };
  });
