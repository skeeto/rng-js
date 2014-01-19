var browserify = require('browserify'),
    test = require('tap').test,
    vm = require('vm');

// This code is taken nearly verbatim from browserify-shim's tests:
// https://github.com/thlorenz/browserify-shim/blob/master/test/bundle-deps.js

test('Bundle via browserify works', function(t) {

  var relPath = '../';

  browserify( { ignoreGlobals: true })
    .require(require.resolve(relPath))
    .bundle(function (err, src) {

      if (err) { t.fail(err); return t.end(); }

      var ctx = { window: {}, console: console };
      ctx.self = ctx.window;
      var require_ = vm.runInNewContext(src, ctx);

      var RNG = require_(require.resolve(relPath));

      t.ok(RNG, 'RNG is defined');
      t.ok(RNG.$, 'Prebuilt instance comes along');
      t.ok(RNG.roller, 'Roller function is present');
      t.end();
    });
});
