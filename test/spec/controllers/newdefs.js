'use strict';

describe('Controller: NewdefsCtrl', function () {

  // load the controller's module
  beforeEach(module('dribbledrobbleApp'));

  var NewdefsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewdefsCtrl = $controller('NewdefsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewdefsCtrl.awesomeThings.length).toBe(3);
  });
});
