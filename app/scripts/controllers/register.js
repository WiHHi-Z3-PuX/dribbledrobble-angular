'use strict';

/**
 * @ngdoc function
 * @name dribbledrobbleApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the dribbledrobbleApp
 */
angular.module('dribbledrobbleApp')
  .controller('RegisterCtrl', function ($scope, ngDialog, localStorage, AuthFactory, usernamesfactory) {
    $scope.registration = {
      'username': ''
    };

    $scope.doRegister = function () {
      console.log('Doing registration', $scope.registration);

      AuthFactory.register($scope.registration);

      ngDialog.close();
    };

    $scope.usernames = [];

    usernamesfactory.query(function (res) {
      $scope.usernames = res.map(function (userObj) {
        return userObj.username;
      });
      // console.log($scope.usernames);
    }, function (err) {
      console.log(err);
    });
  });
