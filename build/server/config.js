'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _americano = require('americano');

var _americano2 = _interopRequireDefault(_americano);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

// Path of the public assets that can be served.
var assetsPaths = _path2['default'].resolve(__dirname, '../client/public');

// Detect if it should use the precompiled jade or the raw jade.
var builtViewPath = _path2['default'].resolve(__dirname, '../client/index.js');
var useBuiltView = _fs2['default'].existsSync(builtViewPath);

exports['default'] = {
    common: {
        use: [_americano2['default'].bodyParser(), _americano2['default'].methodOverride(), _americano2['default'].errorHandler({
            dumpExceptions: true,
            showStack: true
        }), _americano2['default']['static'](assetsPaths, {
            maxAge: 86400000
        })],

        set: {
            'view engine': useBuiltView ? 'js' : 'jade',
            'views': _path2['default'].resolve(__dirname, '../client/')
        },

        engine: {
            js: function loadJSTemplate(filePath, locales, callback) {
                callback(null, require(filePath)(locales));
            }
        }
    },

    development: [_americano2['default'].logger('dev')],

    production: [_americano2['default'].logger('short')],

    plugins: ['cozydb']
};
module.exports = exports['default'];