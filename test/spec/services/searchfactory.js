'use strict';

describe('Service: searchfactory', function () {

  // load the service's module
  beforeEach(module('dribbledrobbleApp'));

  // instantiate service
  var searchfactory;
  beforeEach(inject(function (_searchfactory_) {
    searchfactory = _searchfactory_;
  }));

  it('should do something', function () {
    expect(!!searchfactory).toBe(true);
  });

});
