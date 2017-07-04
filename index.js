require(
    'imports-loader?this=>window!' +
    './lib/easeljs-0.8.2.combined'
);
require(
    'imports-loader?this=>window!' +
    './lib/tweenjs-0.6.2.combined'
);
require(
    'imports-loader?this=>window!' +
    './lib/preloadjs-0.6.2.combined'
);
module.exports = require(
    'imports-loader?this=>window!' +
    'exports-loader?window.createjs!' +
    './lib/soundjs-0.6.2.combined'
);


