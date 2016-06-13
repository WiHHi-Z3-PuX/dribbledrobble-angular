'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.homefactory
 * @description
 * # homefactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('homefactory', function ($resource, baseURL) {
    return $resource(baseURL + "wordDefs/random", null, {
      'query': {
        method: 'GET'
      }
    });
  });
