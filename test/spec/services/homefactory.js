'use strict';

describe('Service: homefactory', function () {

  // load the service's module
  beforeEach(module('dribbledrobbleApp'));

  // instantiate service
  var homefactory;
  beforeEach(inject(function (_homefactory_) {
    homefactory = _homefactory_;
  }));

  it('should do something', function () {
    expect(!!homefactory).toBe(true);
  });

});
