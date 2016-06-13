'use strict';

describe('Service: randomfactory', function () {

  // load the service's module
  beforeEach(module('dribbledrobbleApp'));

  // instantiate service
  var randomfactory;
  beforeEach(inject(function (_randomfactory_) {
    randomfactory = _randomfactory_;
  }));

  it('should do something', function () {
    expect(!!randomfactory).toBe(true);
  });

});
