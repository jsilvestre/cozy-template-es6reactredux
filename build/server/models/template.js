'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cozydb = require('cozydb');

var _cozydb2 = _interopRequireDefault(_cozydb);

var Template = _cozydb2['default'].getModel('Template', {
    title: String,
    content: String
});

exports['default'] = Template;
module.exports = exports['default'];