'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.downvotefactory
 * @description
 * # downvotefactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('downvotefactory', function ($resource, baseURL) {
    return $resource(baseURL + "wordDefs/:wordDefId/downvote", {wordDefId: '@id'}, {
      'update': {
        method: 'PUT'
      }
    });
  });
