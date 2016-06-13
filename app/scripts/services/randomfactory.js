'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.randomfactory
 * @description
 * # randomfactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('randomfactory', function ($resource, baseURL) {
    return $resource(baseURL + "words/random", null, {
      'query': {
        method: 'GET',
        isArray: true
      }
    });
  });
