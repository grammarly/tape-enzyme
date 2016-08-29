/*-
 * Copyright 2016 Grammarly, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import typeDetect from 'type-detect'

function isTrue(value, msg) {
  this.equal(value, true, msg)
}

function isFalse(value, msg) {
  this.equal(value, false, msg)
}

function typeOf(value, type, msg) {
  this.equal(typeDetect(value), type, msg)
}

function notTypeOf(value, type, msg) {
  this.notEqual(typeDetect(value), type, msg)
}

function isLess(val1, val2, msg) {
  this.isTrue(val1 < val2, msg)
}

function isMore(val1, val2, msg) {
  this.isTrue(val1 > val2, msg)
}

function instanceOf(value, constructor, msg) {
  this.isTrue(value instanceof constructor, msg)
}

function notInstanceOf(value, constructor, msg) {
  this.isFalse(value instanceof constructor, msg)
}

function isEmpty(value, msg) {
  this.equal(Object.keys(value).length, 0, msg)
}

function isNotEmpty(value, msg) {
  this.isMore(Object.keys(value).length, 0, msg)
}

function isObject(value, msg) {
  this.typeOf(value, 'object', msg)
}

function isNotObject(value, msg) {
  this.notTypeOf(value, 'object', msg)
}

function isNull(value, msg) {
  msg = msg || 'isNull'
  this.typeOf(value, 'null', msg)
}

function isNotNull(value, msg) {
  this.notTypeOf(value, 'null', msg)
}

// call checkNaN because in JavaScript there is function isNaN
function checkNaN(value, msg) {
  this.isTrue(isNaN(value), msg)
}

function isNotNaN(value, msg) {
  this.isFalse(isNaN(value), msg)
}

function isUndefined(value, msg) {
  this.typeOf(value, 'undefined', msg)
}

function isDefined(value, msg) {
  this.notTypeOf(value, 'undefined', msg)
}

function isFunction(value, msg) {
  this.typeOf(value, 'function', msg)
}

function isNotFunction(value, msg) {
  this.notTypeOf(value, 'function', msg)
}

function isArray(value, msg) {
  this.isTrue(Array.isArray(value), msg)
}

function isNotArray(value, msg) {
  this.isFalse(Array.isArray(value), msg)
}

function isString(value, msg) {
  this.typeOf(value, 'string', msg)
}

function isNotString(value, msg) {
  this.notTypeOf(value, 'string', msg)
}

function isNumber(value, msg) {
  this.typeOf(value, 'number', msg)
}

function isNotNumber(value, msg) {
  this.notTypeOf(value, 'number', msg)
}

function isBoolean(value, msg) {
  this.typeOf(value, 'boolean', msg)
}

function isNotBoolean(value, msg) {
  this.notTypeOf(value, 'boolean', msg)
}

function include(haystack, needle, msg) {
  haystack.hasOwnProperty('includes') && this.isTrue(haystack.includes(needle), msg)
}

function notInclude(haystack, needle, msg) {
  haystack.hasOwnProperty('includes') && this.isFalse(haystack.includes(needle), msg)
}

function lengthOf(object, length, msg) {
  object.hasOwnProperty('length') && this.equal(object.length, length, msg)
}

function match(value, regexp, msg) {
  typeDetect(regexp) === 'regexp' && this.isTrue(regexp.test(value), msg)
}

function notMatch(value, regexp, msg) {
  typeDetect(regexp) === 'regexp' && this.isFalse(regexp.test(value), msg)
}

function operator(val1, operator, val2, msg) {
  switch (operator) {
    case '<':
      this.isLess(val1, val2, msg)
      break
    case '<=':
      this.isLess(val1, val2 + 1, msg)
      break
    case '>':
      this.isMore(val1, val2, msg)
      break
    case '>=':
      this.isMore(val1, val2 - 1, msg)
      break
    case '==':
      this.isTrue(val1 == val2, msg)
      break
    case '!=':
      this.isTrue(val1 != val2, msg)
      break
    case '===':
      this.equal(val1, val2, msg)
      break
    case '!==':
      this.notEqual(val1, val2, msg)
      break
    default:
      this.fail('unsupported operator')
      break
  }
}

function closeTo(actual, expected, delta, msg) {
  this.isTrue(Math.abs(actual - expected) <= delta, msg)
}

function sameMembers(set1, set2, msg) {
  this.deepEqual(set1.sort(), set2.sort(), msg)
}

function includeMembers(superset, subset, msg) {
  this.deepEqual(
    superset.filter((item, index) => superset.indexOf(item) == index && subset.includes(item)).sort(),
    subset.sort(),
    msg
  )
}

function oneOf(inList, list, msg) {
  this.include(list, inList, msg)
}

function property(object, property, msg) {
  this.isDefined(object[property], msg)
}

function notProperty(object, property, msg) {
  this.isUndefined(object[property], msg)
}

export default {
  isTrue, isFalse, typeOf, notTypeOf, isLess, isMore, instanceOf, notInstanceOf, isObject, isNotObject,
  isEmpty, isNotEmpty, isArray, isNotArray, isString, isNotString, isNumber, isNotNumber, isBoolean,
  isNotBoolean, isNull, isNotNull, isUndefined, isDefined, isFunction, isNotFunction, include,
  notInclude, lengthOf, match, notMatch, isNaN: checkNaN, isNotNaN, operator, closeTo,
  sameMembers, includeMembers, oneOf, property, notProperty
}
