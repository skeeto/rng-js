# JavaScript seedable random number generator

The generator below, seeded with "`Example`" will produce the same
values as below for each of these random number distributions across
all browsers.

```javascript
var rng = new RNG('Example');
rng.random(40, 50);  // =>  42
rng.uniform();       // =>  0.7972798995050903
rng.normal();        // => -0.6698504543216376
rng.exponential();   // =>  1.0547367609131555
rng.poisson(4);      // =>  2
rng.gamma(4);        // =>  2.781724687386858
```

The underlying algorithm is RC4 and uniform number generation is about
10x slower than `Math.random` in V8. What you get in exchange for that
is a seedable generator and additional random distributions (see
example). You can still get speed *and* these additional distributions
by using Math.random as the core uniform number generator.

```javascript
var rng = new RNG(Math.random);
```

When no seed is provided, one is created randomly from available
entropy sources. Seeds that are not strings are run through
JSON.stringify() before being used.

Here's how you would replace `Math.random` with a seeded generator.

```javascript
Math.random = RNG.prototype.uniform.bind(new RNG('my seed'));
```

Finally, for fun, a dice roller,

```javascript
var dice = RNG.roller('4d6 + 10');
dice(); // => 17
dice(); // => 11
```

## Node.js Usage

```javascript
var RNG = require('rng-js');
```

This module can also be [browserified][browserify] thanks to
[browserify-shim][shim].


[browserify]: https://github.com/substack/node-browserify
[shim]: https://github.com/thlorenz/browserify-shim
