'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeDetect = require('type-detect');

var _typeDetect2 = _interopRequireDefault(_typeDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isTrue(value, msg) {
  this.equal(value, true, msg);
}

function isFalse(value, msg) {
  this.equal(value, false, msg);
}

function typeOf(value, type, msg) {
  this.equal((0, _typeDetect2.default)(value), type, msg);
}

function notTypeOf(value, type, msg) {
  this.notEqual((0, _typeDetect2.default)(value), type, msg);
}

function instanceOf(value, constructor, msg) {
  this.isTrue(value instanceof constructor, msg);
}

function notInstanceOf(value, constructor, msg) {
  this.isFalse(value instanceof constructor, msg);
}

function isEmpty(value, msg) {
  this.isTrue(Object.keys(value).length === 0, msg);
}

function isNotEmpty(value, msg) {
  this.isTrue(Object.keys(value).length > 0, msg);
}

function isObject(value, msg) {
  this.typeOf(value, 'object', msg);
}

function isNotObject(value, msg) {
  this.notTypeOf(value, 'object', msg);
}

function isNull(value, msg) {
  msg = msg || 'isNull';
  this.typeOf(value, 'null', msg);
}

function isNotNull(value, msg) {
  this.notTypeOf(value, 'null', msg);
}

function checkNaN(value, msg) {
  this.isTrue(isNaN(value), msg);
}

function isNotNaN(value, msg) {
  this.isFalse(isNaN(value), msg);
}

function isUndefined(value, msg) {
  this.typeOf(value, 'undefined', msg);
}

function isDefined(value, msg) {
  this.notTypeOf(value, 'undefined', msg);
}

function isFunction(value, msg) {
  this.typeOf(value, 'function', msg);
}

function isNotFunction(value, msg) {
  this.notTypeOf(value, 'function', msg);
}

function isArray(value, msg) {
  this.isTrue(Array.isArray(value), msg);
}

function isNotArray(value, msg) {
  this.isFalse(Array.isArray(value), msg);
}

function isString(value, msg) {
  this.typeOf(value, 'string', msg);
}

function isNotString(value, msg) {
  this.notTypeOf(value, 'string', msg);
}

function isNumber(value, msg) {
  this.typeOf(value, 'number', msg);
}

function isNotNumber(value, msg) {
  this.notTypeOf(value, 'number', msg);
}

function isBoolean(value, msg) {
  this.typeOf(value, 'boolean', msg);
}

function isNotBoolean(value, msg) {
  this.notTypeOf(value, 'boolean', msg);
}

function include(haystack, needle, msg) {
  haystack.hasOwnProperty('includes') && this.isTrue(haystack.includes(needle), msg);
}

function notInclude(haystack, needle, msg) {
  haystack.hasOwnProperty('includes') && this.isFalse(haystack.includes(needle), msg);
}

function lengthOf(object, length, msg) {
  object.hasOwnProperty('length') && this.equal(object.length, length, msg);
}

function match(value, regexp, msg) {
  (0, _typeDetect2.default)(regexp) === 'regexp' && this.isTrue(regexp.test(value), msg);
}

function notMatch(value, regexp, msg) {
  (0, _typeDetect2.default)(regexp) === 'regexp' && this.isFalse(regexp.test(value), msg);
}

function operator(val1, operator, val2, msg) {
  switch (operator) {
    case '<':
      this.isTrue(val1 < val2, msg);
      break;
    case '<=':
      this.isTrue(val1 <= val2, msg);
      break;
    case '>':
      this.isTrue(val1 > val2, msg);
      break;
    case '>=':
      this.isTrue(val1 >= val2, msg);
      break;
    case '==':
      this.isTrue(val1 == val2, msg);
      break;
    case '!=':
      this.isTrue(val1 != val2, msg);
      break;
    case '===':
      this.equal(val1, val2, msg);
      break;
    case '!==':
      this.notEqual(val1, val2, msg);
      break;
    default:
      this.fail('unsupported operator');
      break;
  }
}

function closeTo(actual, expected, delta, msg) {
  this.isTrue(Math.abs(actual - expected) <= delta, msg);
}

function sameMembers(set1, set2, msg) {
  this.deepEqual(set1.sort(), set2.sort(), msg);
}

function includeMembers(superset, subset, msg) {
  this.deepEqual(superset.filter(function (item, index) {
    return superset.indexOf(item) == index && subset.includes(item);
  }).sort(), subset.sort(), msg);
}

function oneOf(inList, list, msg) {
  this.include(list, inList, msg);
}

function property(object, property, msg) {
  this.isDefined(object[property], msg);
}

function notProperty(object, property, msg) {
  this.isUndefined(object[property], msg);
}

exports.default = {
  isTrue: isTrue, isFalse: isFalse, typeOf: typeOf, notTypeOf: notTypeOf, instanceOf: instanceOf, notInstanceOf: notInstanceOf, isObject: isObject, isNotObject: isNotObject, isEmpty: isEmpty, isNotEmpty: isNotEmpty,
  isArray: isArray, isNotArray: isNotArray, isString: isString, isNotString: isNotString, isNumber: isNumber, isNotNumber: isNotNumber, isBoolean: isBoolean, isNotBoolean: isNotBoolean, isNull: isNull, isNotNull: isNotNull,
  isUndefined: isUndefined, isDefined: isDefined, isFunction: isFunction, isNotFunction: isNotFunction, include: include, notInclude: notInclude, lengthOf: lengthOf, match: match, notMatch: notMatch,
  isNaN: checkNaN, isNotNaN: isNotNaN, operator: operator, closeTo: closeTo, sameMembers: sameMembers, includeMembers: includeMembers, oneOf: oneOf, property: property, notProperty: notProperty
};