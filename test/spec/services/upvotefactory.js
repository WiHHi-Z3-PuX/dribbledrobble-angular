'use strict';

describe('Service: upvotefactory', function () {

  // load the service's module
  beforeEach(module('dribbledrobbleApp'));

  // instantiate service
  var upvotefactory;
  beforeEach(inject(function (_upvotefactory_) {
    upvotefactory = _upvotefactory_;
  }));

  it('should do something', function () {
    expect(!!upvotefactory).toBe(true);
  });

});
