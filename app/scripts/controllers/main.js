'use strict';

/**
 * @ngdoc function
 * @name werocktechApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the werocktechApp
 */
angular.module('werocktechApp')
  .controller('MainCtrl', function (series, $mdDialog) {
    var self = this;

    self.filterByTag = function(keyword) {
      self.search = {
        'query': keyword
      }
    };

    self.getSeries = function() {
      series.findAll().then(function successCallback(response) {
        self.series = response.data;
      }, function errorCallback(response) {
        console.log(response.data);
      });
    };

    self.search = function(ev) {
      $mdDialog.show({
        controller: self,
        templateUrl: '/views/template/search.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: self.customFullscreen // Only for -xs, -sm breakpoints.
      });
        // .then(function (answer) {
        //   self.status = 'You said the information was "' + answer + '".';
        // }, function () {
        //   self.status = 'You cancelled the dialog.';
        // });
    };

  });
