'use strict';

/**
 * @ngdoc service
 * @name dribbledrobbleApp.AuthFactory
 * @description
 * # AuthFactory
 * Factory in the dribbledrobbleApp.
 */
angular.module('dribbledrobbleApp')
  .factory('AuthFactory', function ($resource, $http, localStorage, $rootScope, $window, baseURL, ngDialog) {
    var authFac = {};
    var TOKEN_KEY = 'Token';
    var isAuthenticated = false;
    var username = '';
    var authToken = undefined;

    function loadUserCredentials() {
      var credentials = localStorage.getObject(TOKEN_KEY, '{}');
      if (credentials.username !== undefined) {
        useCredentials(credentials);
      }
    }

    function storeUserCredentials(credentials) {
      localStorage.storeObject(TOKEN_KEY, credentials);
      useCredentials(credentials);
    }

    function useCredentials(credentials) {
      isAuthenticated = true;
      username = credentials.username;
      authToken = credentials.token;

      $http.defaults.headers.common['x-access-token'] = authToken;
    }

    function destroyUserCredentials() {
      authToken = undefined;
      username = '';
      isAuthenticated = false;
      $http.defaults.headers.common['x-access-token'] = authToken;
      localStorage.remove(TOKEN_KEY);
    }

    authFac.login = function (loginData) {
      $resource(baseURL + "users/login")
        .save(loginData,
          function (response) {
            storeUserCredentials({username: loginData.username, token: response.token});
            $rootScope.$broadcast('login:Successful');
          },
          function (response) {
            isAuthenticated = false;

            // var message = '\
            //     <div class="ngdialog-message">\
            //     <div><h3>Login Unsuccessful</h3></div>' +
            //   '<div><p>' +  response.data.err.message + '</p><p>' +
            //   response.data.err.name + '</p></div>' +
            //   '<div class="ngdialog-buttons">\
            //       <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click=confirm("OK")>OK</button>\
            //   </div>';

            console.log(response);

            var message = '<div class="ngdialog-message"> <div> <h3>Login Unsuccessful</h3> </div> <div><p>' +  response.data.err.message + '</p><p>' + response.data.err.name + '</p></div> <div class="ngdialog-buttons"> <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click=confirm("OK")>OK</button> </div> </div>';

            ngDialog.openConfirm({template: message, plain: 'true'});
          }
        );
    };

    authFac.logout = function () {
      $resource(baseURL + "users/logout").get(function (response) {
        console.log(response);
      });
      destroyUserCredentials();
    };

    authFac.register = function (registerData) {
      $resource(baseURL + "users/register")
        .save(registerData,
          function (response) {
            // console.log(response);
            authFac.login({username: registerData.username, password: registerData.password});
            if (registerData.rememberMe) {
              localStorage.storeObject('userinfo', {username: registerData.username, password: registerData.password});
            }

            $rootScope.$broadcast('registration:Successful');
          },
          function (response) {
            var message = '<div class="ngdialog-message"><div><h3>Registration Unsuccessful</h3></div>' + '<div><p>' +  response.data.err.message + '</p><p>' + response.data.err.name + '</p></div>';

            ngDialog.openConfirm({template: message, plain: 'true'});
          }
        );
    };

    authFac.isAuthenticated = function () {
      return isAuthenticated;
    };

    authFac.getUsername = function () {
      return username;
    };

    loadUserCredentials();

    return authFac;
  });
