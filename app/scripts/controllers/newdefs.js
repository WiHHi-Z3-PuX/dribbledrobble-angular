'use strict';

/**
 * @ngdoc function
 * @name dribbledrobbleApp.controller:NewdefsCtrl
 * @description
 * # NewdefsCtrl
 * Controller of the dribbledrobbleApp
 */
angular.module('dribbledrobbleApp')
  .controller('NewdefsCtrl', function ($scope, newFactory, upvotefactory, downvotefactory, AuthFactory, ngDialog) {
    $scope.newDefs = [];

    newFactory.query(
      function (res) {
        $scope.newDefs = res;
        // console.log($scope.newDefs);
      },
      function (err) {
        console.log(err);
      }
    );

    $scope.loggedIn = false;

    if (AuthFactory.isAuthenticated()) {
      $scope.loggedIn = true;
    }

    var votingMessage =  "<h3>You can only vote once</h3><br/><button type='button' class='btn btn-default btn-sm' ng-click='closeThisDialog()'>OK</button>";

    $scope.upvote = function (id, index) {
      // console.log(id);
      upvotefactory.update({wordDefId: id}, {}, function (res) {
        // console.log(res);
        if (res._id === id) {
          $scope.newDefs[index].rating += 1;
        } else {
          ngDialog.open({
            template: votingMessage,
            plain: true
          });
        }
      }, function (err) {
        console.log(err);
      });
    };

    $scope.downvote = function (id, index) {
      // console.log(id);
      downvotefactory.update({wordDefId: id}, {}, function (res) {
        // console.log(res);
        if (res._id === id) {
          $scope.newDefs[index].rating -= 1;
        } else {
          ngDialog.open({
            template: votingMessage,
            plain: true
          });
        }
      }, function (err) {
        console.log(err);
      });
    };
  });
