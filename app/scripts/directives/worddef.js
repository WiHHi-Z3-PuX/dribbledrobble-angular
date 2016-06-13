'use strict';

/**
 * @ngdoc directive
 * @name dribbledrobbleApp.directive:worddef
 * @description
 * # worddef
 */
angular.module('dribbledrobbleApp')
  .directive('worddef', function () {
    return {
      templateUrl: './views/worddeftemplate.html',
      restrict: 'E'
    };
  });
