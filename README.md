# JavaScript seedable random number generator

The generator below, seeded with "`Example`" will produce the same
values as below for each of these random number distributions across
all browsers.

```javascript
var rng = new RNG('Example');
rng.uniform();      //  0.23486116157656023
rng.normal();       // -0.19479177607547019
rng.exponential();  //  0.5060762637166598
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
