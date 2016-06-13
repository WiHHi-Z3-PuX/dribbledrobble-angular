'use strict';

/**
 * @ngdoc function
 * @name dribbledrobbleApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the dribbledrobbleApp
 */
angular.module('dribbledrobbleApp')
  .controller('SearchCtrl', function ($scope, $stateParams) {
    $scope.queryString = '';
    $scope.sorting = 'word';
    
    $scope.words = [];

    if ($stateParams.words) {
      $scope.words = $stateParams.words;
    }
  });
