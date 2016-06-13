'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.tagdefsfactory
 * @description
 * # tagdefsfactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('tagdefsfactory', function ($resource, baseURL) {
    return $resource(baseURL + "tags/one", null, {
      'save': {
        method: 'POST',
        isArray: true
      }
    });
  });
