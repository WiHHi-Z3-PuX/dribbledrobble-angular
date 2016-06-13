'use strict';

/**
 * @ngdoc overview
 * @name dribbledrobbleApp
 * @description
 * # dribbledrobbleApp
 *
 * Main module of the application.
 */
angular
  .module('dribbledrobbleApp', [
    'ui.router','ngResource','ngDialog', 'ngTagsInput','ngMessages'
  ])
  .constant("baseURL", "http://localhost:3000/")
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
        url: '/',
        views: {
          'header': {
            templateUrl: 'views/header.html',
            controller: 'HeaderCtrl'
          },
          'content': {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('app.newDefs', {
        url: 'newDefs',
        views: {
          'content@': {
            templateUrl: 'views/newDefs.html',
            controller: 'NewdefsCtrl'
          }
        }
      })
      .state('app.topRated', {
        url: 'topRated',
        views: {
          'content@': {
            templateUrl: 'views/topRated.html',
            controller: 'TopratedCtrl'
          }
        }
      })
      .state('app.word', {
        url: 'word',
        views: {
          'content@': {
            templateUrl: 'views/word.html',
            controller: 'WordCtrl'
          }
        },
        params: { random: null, word: null }
      })
      .state('app.tags', {
        url: 'tags',
        views: {
          'content@': {
            templateUrl: 'views/tags.html',
            controller: 'TagsCtrl'
          }
        }
      })
      .state('app.search', {
        url: 'search',
        views: {
          'content@': {
            templateUrl: 'views/search.html',
            controller: 'SearchCtrl'
          }
        },
        params: { words: null }
      })
      .state('app.worddefs', {
        url: 'worddefs',
        views: {
          'content@': {
            templateUrl: 'views/worddefs.html',
            controller: 'WorddefsCtrl'
          }
        },
        params: { tag: null }
      });
    $urlRouterProvider.otherwise('/');
  });
