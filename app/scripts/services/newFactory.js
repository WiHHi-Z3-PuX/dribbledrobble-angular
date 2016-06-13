'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.worddef
 * @description
 * # worddef
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('newFactory', function ($resource, baseURL) {
      return $resource(baseURL + "wordDefs/new", null, {
        'query': {
          method: 'GET',
          isArray: true
        }
      });
  });
