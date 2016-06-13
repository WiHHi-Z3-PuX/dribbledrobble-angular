'use strict';

describe('Directive: worddef', function () {

  // load the directive's module
  beforeEach(module('dribbledrobbleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<worddef></worddef>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the worddef directive');
  }));
});
