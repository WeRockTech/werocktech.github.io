'use strict';

/**
 * @ngdoc function
 * @name werocktechApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the werocktechApp
 */
angular.module('werocktech.search', [])
  .controller('SearchCtrl', function ($mdDialog) {
    var self = this;

    self.cancel = function () {
      $mdDialog.cancel();
    };

    self.answer = function (answer) {
      $mdDialog.hide(answer);
    };
  });
