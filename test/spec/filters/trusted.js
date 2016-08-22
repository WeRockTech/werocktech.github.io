'use strict';

describe('Filter: trusted', function () {

  // load the filter's module
  beforeEach(module('werocktechApp'));

  // initialize a new instance of the filter before each test
  var trusted;
  beforeEach(inject(function ($filter) {
    trusted = $filter('trusted');
  }));

  it('should return the input prefixed with "trusted filter:"', function () {
    var text = 'angularjs';
    expect(trusted(text)).toBe('trusted filter: ' + text);
  });

});
