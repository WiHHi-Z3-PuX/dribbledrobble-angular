'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.searchfactory
 * @description
 * # searchfactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('searchfactory', function ($resource, baseURL) {
    return $resource(baseURL + "words", null, {
      'query': {
        method: 'GET',
        isArray: true
      }
    });
  });
