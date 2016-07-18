'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = wrapper;

var _enzyme = require('./enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function wrapper(component) {
  var _this = this;

  var threeArgv = [].concat(_toConsumableArray(Object.keys(_enzyme2.default)), ['lengthOf']).reduce(function (memo, method) {
    memo[method] = function (value, msg) {
      return _this[method](component, value, msg);
    };
    return memo;
  }, {});
  var fourArgv = ['prop', 'state', 'stateDeep', 'propDeep'].reduce(function (memo, method) {
    memo[method] = function (name, value, msg) {
      return threeArgv[method](component, name, value, msg);
    };
    return memo;
  }, {});
  return _extends({}, threeArgv, fourArgv);
}