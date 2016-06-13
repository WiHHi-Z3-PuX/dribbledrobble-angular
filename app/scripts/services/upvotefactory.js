'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.upvotefactory
 * @description
 * # upvotefactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('upvotefactory', function ($resource, baseURL) {
    return $resource(baseURL + "wordDefs/:wordDefId/upvote", {wordDefId: '@id'}, {
      'update': {
        method: 'PUT'
      }
    });
  });
