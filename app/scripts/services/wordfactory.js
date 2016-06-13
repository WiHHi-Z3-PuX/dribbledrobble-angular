'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.wordfactory
 * @description
 * # wordfactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('wordfactory', function ($resource, baseURL) {
    return $resource(baseURL + "words/one", null, {
      'save': {
        method: 'POST',
        isArray: true
      }
    });
  });
