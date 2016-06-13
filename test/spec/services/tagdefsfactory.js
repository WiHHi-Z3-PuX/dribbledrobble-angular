'use strict';

describe('Service: tagdefsfactory', function () {

  // load the service's module
  beforeEach(module('dribbledrobbleApp'));

  // instantiate service
  var tagdefsfactory;
  beforeEach(inject(function (_tagdefsfactory_) {
    tagdefsfactory = _tagdefsfactory_;
  }));

  it('should do something', function () {
    expect(!!tagdefsfactory).toBe(true);
  });

});
