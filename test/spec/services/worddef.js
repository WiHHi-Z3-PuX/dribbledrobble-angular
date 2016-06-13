'use strict';

describe('Service: worddef', function () {

  // load the service's module
  beforeEach(module('dribbledrobbleApp'));

  // instantiate service
  var worddef;
  beforeEach(inject(function (_worddef_) {
    worddef = _worddef_;
  }));

  it('should do something', function () {
    expect(!!worddef).toBe(true);
  });

});
