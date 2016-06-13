'use strict';

describe('Directive: duplicate', function () {

  // load the directive's module
  beforeEach(module('dribbledrobbleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<duplicate></duplicate>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the duplicate directive');
  }));
});
