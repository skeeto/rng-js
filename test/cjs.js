var test = require('tap').test;

test('Loading via CJS (node) works', function(t) {

  var RNG = require('../');

  t.ok(RNG, 'RNG is defined');
  t.ok(RNG.$, 'Prebuilt instance comes along');
  t.ok(RNG.roller, 'Roller function is present');
  t.end();
});
