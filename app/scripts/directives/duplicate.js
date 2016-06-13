'use strict';

/**
 * @ngdoc directive
 * @name dribbledrobbleApp.directive:duplicate
 * @description
 * # duplicate
 */
angular.module('dribbledrobbleApp')
  .directive('duplicate', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function (scope, element, attrs, ctrl) {
        ctrl.$parsers.unshift(function (viewValue) {
          // console.log(attrs.duplicate);
          var duplicate = scope[attrs.duplicate];
          // console.log(duplicate);
          if (duplicate.indexOf(viewValue) !== -1) {
            // console.log('exists!');
            ctrl.$setValidity('duplicate', false);
            return undefined;
          } else {
            ctrl.$setValidity('duplicate', true);
            return viewValue;
          }
        });
      }
    };
  });
