'use strict';

describe('Service: adddnewfactory', function () {

  // load the service's module
  beforeEach(module('dribbledrobbleApp'));

  // instantiate service
  var adddnewfactory;
  beforeEach(inject(function (_adddnewfactory_) {
    adddnewfactory = _adddnewfactory_;
  }));

  it('should do something', function () {
    expect(!!adddnewfactory).toBe(true);
  });

});
