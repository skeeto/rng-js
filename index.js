var vm = require('vm');
var fs = require('fs');
var path = require('path');

// You shouldn't need to specify the whole path, but tap doesn't like a
// relative path when testing.
var localPath = path.join(__dirname, 'rng.js');
var src = fs.readFileSync(localPath, { encoding: 'utf8' });

var ctx = { window: {} };
vm.runInNewContext(src, ctx);

module.exports = ctx.RNG;
