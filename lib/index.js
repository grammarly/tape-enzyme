'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registration = registration;

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _simple = require('./utils/simple');

var _simple2 = _interopRequireDefault(_simple);

var _enzyme = require('./utils/enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _init = require('./utils/init');

var _init2 = _interopRequireDefault(_init);

var _wrapper = require('./utils/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registration(tape) {
  [_enzyme2.default, _simple2.default].forEach(function (utils) {
    return Object.keys(utils).forEach(function (key) {
      return tape.Test.prototype[key] = utils[key];
    });
  });
  tape.Test.prototype.wrapper = _wrapper2.default;
  tape.init = (0, _init2.default)(tape);
  return tape;
}

exports.default = registration(_tape2.default);