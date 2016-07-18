'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _simple = require('./utils/simple');

var _simple2 = _interopRequireDefault(_simple);

var _enzyme = require('./utils/enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _wrapper = require('./utils/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

[_enzyme2.default, _simple2.default].forEach(function (utils) {
  return Object.keys(utils).forEach(function (key) {
    return _tape2.default.Test.prototype[key] = utils[key];
  });
});

_tape2.default.Test.prototype.wrapper = _wrapper2.default;

exports.default = _tape2.default;