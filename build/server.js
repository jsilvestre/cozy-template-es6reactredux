'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _americano = require('americano');

var _americano2 = _interopRequireDefault(_americano);

_americano2['default'].start({
    name: 'template',
    port: process.env.PORT || 9250,
    root: __dirname
});
