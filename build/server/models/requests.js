'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _cozydb = require('cozydb');

var _cozydb2 = _interopRequireDefault(_cozydb);

exports['default'] = {
    template: {
        all: _cozydb2['default'].defaultRequests.all
    }
};
module.exports = exports['default'];