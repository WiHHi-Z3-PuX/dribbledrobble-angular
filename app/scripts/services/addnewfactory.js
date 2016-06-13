'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.adddnewfactory
 * @description
 * # adddnewfactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('addnewfactory', function ($resource, baseURL) {
    return $resource(baseURL + "wordDefs", null, {
      'save': {
        method: 'post'
      }
    });
  });
