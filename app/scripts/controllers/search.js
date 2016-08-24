'use strict';

/**
 * @ngdoc function
 * @name werocktechApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the werocktechApp
 */
angular.module('werocktech.search', [])
  .controller('SearchCtrl', function ($mdDialog, name, series, search) {
    var self = this;

    self.findOneByName = function () {
      series.findAll().then(function successCallback(response) {
        self.episode = search.findOneByName(response.data, name);
      }, function errorCallback(response) {
        console.log(response);
      });
    };

    self.cancel = function () {
      $mdDialog.cancel();
    };
  });
