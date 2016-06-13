'use strict';

describe('Service: topfactory', function () {

  // load the service's module
  beforeEach(module('dribbledrobbleApp'));

  // instantiate service
  var topfactory;
  beforeEach(inject(function (_topfactory_) {
    topfactory = _topfactory_;
  }));

  it('should do something', function () {
    expect(!!topfactory).toBe(true);
  });

});
