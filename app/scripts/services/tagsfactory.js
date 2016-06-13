'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.tagsfactory
 * @description
 * # tagsfactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('tagsfactory', function ($resource, baseURL) {
    return $resource(baseURL + "tags", null, {
      'query': {
        method: 'GET',
        isArray: true
      }
    });
  });
