'use strict';

/**
 * @ngdoc function
 * @name dribbledrobbleApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the dribbledrobbleApp
 */
angular.module('dribbledrobbleApp')
  .controller('HeaderCtrl', function ($scope, $state, $rootScope, ngDialog, AuthFactory, searchfactory) {
    $scope.loggedIn = false;
    $scope.username = '';

    if (AuthFactory.isAuthenticated()) {
      $scope.loggedIn = true;
      $scope.username = AuthFactory.getUsername();
    }

    $scope.openLogin = function () {
      ngDialog.open({template:'views/login.html', scope: $scope, className: 'ngdialog-theme-default', controller: "LoginCtrl"});
    };

    $scope.openRegister = function () {
      ngDialog.open({template: 'views/register.html', scope: $scope,
        className: 'ngdialog-theme-default', controller: "RegisterCtrl"});
    };

    $scope.addNew = function () {
      ngDialog.open({
        template: 'views/addNew.html',
        scope: $scope,
        classname: 'ngdialog-theme-default',
        controller: 'AddnewCtrl'
      });
    };

    $scope.logOut = function () {
      AuthFactory.logout();
      $scope.loggedIn = false;
      $scope.username = '';
    };

    $rootScope.$on('login:Successful', function () {
      $scope.loggedIn = AuthFactory.isAuthenticated();
      $scope.username = AuthFactory.getUsername();
    });

    $rootScope.$on('registration:Successful', function () {
      $scope.loggedIn = AuthFactory.isAuthenticated();
      $scope.username = AuthFactory.getUsername();
    });

    $scope.stateis = function (curstate) {
      return $state.is(curstate);
    };

    $scope.words = null;
    
    searchfactory.query(function (res) {
      // $scope.words = res.map(function (wordObj) {
      //   return wordObj.word;
      // });
      $scope.words = res;
      // console.log($scope.words);
    }, function (err) {
      console.log(err);
    });
  });
