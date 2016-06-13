'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.usernamesfactory
 * @description
 * # usernamesfactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('usernamesfactory', function ($resource, baseURL) {
    return $resource(baseURL + "users", null, {
      'query': {
        method: 'GET',
        isArray: true
      }
    });
  });
