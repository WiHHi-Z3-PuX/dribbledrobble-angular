'use strict';

describe('Controller: WordCtrl', function () {

  // load the controller's module
  beforeEach(module('dribbledrobbleApp'));

  var WordCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WordCtrl = $controller('WordCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WordCtrl.awesomeThings.length).toBe(3);
  });
});
