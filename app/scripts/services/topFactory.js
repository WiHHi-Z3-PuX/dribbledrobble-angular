'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.topfactory
 * @description
 * # topfactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('topFactory', function ($resource, baseURL) {
    return $resource(baseURL + "wordDefs/top", null, {
      'query': {
        method: 'GET',
        isArray: true
      }
    });
  });
