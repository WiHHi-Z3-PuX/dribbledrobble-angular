'use strict';

/**
 * @ngdoc function
 * @name dribbledrobbleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the dribbledrobbleApp
 */
angular.module('dribbledrobbleApp')
  .controller('LoginCtrl', function ($scope, ngDialog, localStorage, AuthFactory) {
    $scope.loginData = localStorage.getObject('username', '{}');

    $scope.doLogin = function () {
      if($scope.rememberMe) {
        localStorage.storeObject('userinfo', $scope.loginData);
      }

      console.log($scope.loginData);

      AuthFactory.login($scope.loginData);

      ngDialog.close();
    };
  });
