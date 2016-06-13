'use strict';

/**
 * @ngdoc function
 * @name dribbledrobbleApp.controller:WordCtrl
 * @description
 * # WordCtrl
 * Controller of the dribbledrobbleApp
 */
angular.module('dribbledrobbleApp')
  .controller('WordCtrl', function ($scope, $stateParams, randomfactory, wordfactory, upvotefactory, downvotefactory, AuthFactory, ngDialog) {
    $scope.defs = null;

    if ($stateParams.random) {
      randomfactory.query(
        function (res) {
          $scope.defs = res;
          // console.log($scope.defs);
        },
        function (err) {
          console.log(err);
        }
      );
    }

    if ($stateParams.word) {
      wordfactory.save({word: $stateParams.word}, function (res) {
        $scope.defs = res;
        // console.log($scope.defs);
      }, function (err) {
        console.log(err);
      });
    }

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
          $scope.defs[index].rating += 1;
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
          $scope.defs[index].rating -= 1;
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
