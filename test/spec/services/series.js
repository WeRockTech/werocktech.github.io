'use strict';

describe('Service: series', function () {

  // load the service's module
  beforeEach(module('werocktechApp'));

  // instantiate service
  var series;
  beforeEach(inject(function (_series_) {
    series = _series_;
  }));

  it('should do something', function () {
    expect(!!series).toBe(true);
  });

});
