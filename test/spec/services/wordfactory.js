'use strict';

describe('Service: wordfactory', function () {

  // load the service's module
  beforeEach(module('dribbledrobbleApp'));

  // instantiate service
  var wordfactory;
  beforeEach(inject(function (_wordfactory_) {
    wordfactory = _wordfactory_;
  }));

  it('should do something', function () {
    expect(!!wordfactory).toBe(true);
  });

});
