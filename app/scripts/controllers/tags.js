'use strict';

/**
 * @ngdoc function
 * @name dribbledrobbleApp.controller:TagsCtrl
 * @description
 * # TagsCtrl
 * Controller of the dribbledrobbleApp
 */
angular.module('dribbledrobbleApp')
  .controller('TagsCtrl', function ($scope, tagsfactory) {
    // $scope.tags = [
    //   {
    //     tag: 'nonsence',
    //     nused: 15
    //   },
    //   {
    //     tag: 'poetry',
    //     nused: 52
    //   },
    //   {
    //     tag: 'drivel',
    //     nused: 42
    //   }
    // ];

    $scope.tags = [];

    tagsfactory.query(
      function (res) {
        $scope.tags = res;
        // console.log($scope.tags);
      },
      function (err) {
        console.log(err);
      }
    );
  });
