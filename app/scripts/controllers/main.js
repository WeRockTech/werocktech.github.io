'use strict';

/**
 * @ngdoc function
 * @name werocktechApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the werocktechApp
 */
angular.module('werocktechApp')
  .controller('MainCtrl', function (series) {
    var self = this;

    this.filterByTag = function(keyword) {
      self.search = {
        'query': keyword
      }
    };

    this.getSeries = function() {
      series.findAll().then(function successCallback(response) {
        self.series = response.data;
      }, function errorCallback(response) {
        console.log(response.data);
      });
    }
  });
