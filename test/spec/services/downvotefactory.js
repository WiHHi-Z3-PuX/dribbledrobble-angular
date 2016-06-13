'use strict';

describe('Service: downvotefactory', function () {

  // load the service's module
  beforeEach(module('dribbledrobbleApp'));

  // instantiate service
  var downvotefactory;
  beforeEach(inject(function (_downvotefactory_) {
    downvotefactory = _downvotefactory_;
  }));

  it('should do something', function () {
    expect(!!downvotefactory).toBe(true);
  });

});
