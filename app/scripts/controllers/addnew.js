'use strict';

/**
 * @ngdoc function
 * @name dribbledrobbleApp.controller:AddnewCtrl
 * @description
 * # AddnewCtrl
 * Controller of the dribbledrobbleApp
 */
angular.module('dribbledrobbleApp')
  .controller('AddnewCtrl', function ($scope, ngDialog, addnewfactory, tagsfactory, $q, $filter) {
    $scope.new = {};
    $scope.newTags = null;

    $scope.allTags = [];

    tagsfactory.query(
      function (res) {
        $scope.allTags = res.map(function (tag) {
          return {'text': tag.tag};
        });
        // console.log(allTags);
      },
      function (err) {
        console.log(err);
      }
    );

    $scope.loadTagsAutocomplete = function (query) {
      var deferred = $q.defer();
      deferred.resolve( $filter('filter')($scope.allTags, query));
      // deferred.resolve($scope.allTags);
      return deferred.promise;
    };

    $scope.addNew = function () {
      // console.log($scope.newTags);

      var tagsFlat = $scope.newTags.map(function (tag) {
        return tag.text;
      });

      $scope.new.tags = tagsFlat;

      console.log($scope.new);

      addnewfactory.save($scope.new,
        function (res) {
          console.log(res);
        },
        function (err) {
          console.log(err);
        }
      );

      ngDialog.close();
    };
  });
