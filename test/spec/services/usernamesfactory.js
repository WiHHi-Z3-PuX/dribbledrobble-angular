'use strict';

describe('Service: usernamesfactory', function () {

  // load the service's module
  beforeEach(module('dribbledrobbleApp'));

  // instantiate service
  var usernamesfactory;
  beforeEach(inject(function (_usernamesfactory_) {
    usernamesfactory = _usernamesfactory_;
  }));

  it('should do something', function () {
    expect(!!usernamesfactory).toBe(true);
  });

});
