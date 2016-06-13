'use strict';

/**
 * @ngdoc function
 * @name dribbledrobbleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dribbledrobbleApp
 */
angular.module('dribbledrobbleApp')
  .controller('HomeCtrl', function ($scope, homefactory) {
    $scope.slogan = 'you won\'t find this in a dictionary';

    // $scope.randomWord = {
    //   word: 'word',
    //   description: 'jidsfhifsjgh oisdjgj osdij wofds do josdj odsdo ksgdos jso jsiod',
    //   example: 'dskjnf nds slkdj ksdf kdsljf lk sdl'
    // };

    $scope.randomWord = null;

    homefactory.query(
      function (res) {
        $scope.randomWord = res;
        // console.log($scope.randomWord);
      },
      function (err) {
        console.log(err);
      }
    );
  });
