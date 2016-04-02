'use strict';

/**
 * @ngdoc function
 * @name testMytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testMytodoApp
 */
angular.module('testMytodoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
