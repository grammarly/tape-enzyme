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

import test from '../src'

test('simple test', t => {
  const number = 1
  const array = [1, 2, 3]
  const object = {a: 1, b: 2, c: 3}
  const string = 'foobar'
  const regexp = /^foo/
  const func = function (name) { this.name = name } 
  const boolean = true
  const date = new Date()

  t.isTrue(true, 'should be true')
  t.isFalse(false, 'should be false')

  t.typeOf(object, 'object', 'should be an object')
  t.typeOf(array, 'array', 'should be an array')
  t.typeOf(string, 'string', 'should be a string')
  t.typeOf(number, 'number', 'should be a number')
  t.typeOf(boolean, 'boolean', 'should be boolean')
  t.typeOf(regexp, 'regexp', 'should be a regular expression')
  t.typeOf(date, 'date', 'should be a date')
  t.typeOf(null, 'null', 'should be a null')
  t.typeOf(undefined, 'undefined', 'should be an undefined')
  
  t.notTypeOf('tea', 'number', 'string should not be number')

  t.isMore(2, 1, '2 should be greater then 1')
  t.isLess(1, 2, '1 should be less then 2')

  t.instanceOf(date, Date, 'should be instance of Date')
  t.notInstanceOf(date, String, 'should not be an instance of String')

  t.isObject(object, 'should be object')
  t.isNotObject(string, 'should not be object')

  t.isEmpty({}, 'object should be empty')
  t.isEmpty([], 'array should be empty')
  t.isEmpty('', 'string should be empty')
  t.isNotEmpty(object, 'object should not be empty')
  t.isNotEmpty(array, 'array should not be empty')
  t.isNotEmpty('foo', 'string should not be empty')

  t.isArray(array, 'should be array')
  t.isNotArray(string, 'should not be array')

  t.isString(string, 'should be string')
  t.isNotString(object, 'should not be string')

  t.isNumber(number, 'should be number')
  t.isNotNumber(string, 'should not be number')

  t.isBoolean(boolean, 'should be boolean')
  t.isNotBoolean(string, 'should not be boolean')
  
  t.isNull(null, 'should be null')
  t.isNotNull(NaN, 'should not be null')

  t.isNaN(NaN, 'should be NaN')
  t.isNotNaN(null, 'should not be NaN')

  t.isUndefined(undefined, 'should be undefined')

  t.isDefined(boolean, 'should be defined')
  
  t.isFunction(func, 'should be function')
  t.isNotFunction(string, 'should not be function')
  
  t.include(array, 1, 'should include 1')
  t.notInclude(array, 4, 'should not include 4')

  t.lengthOf(array, 3, 'length should be 3')

  t.match(string, regexp, 'should regexp matches')
  t.notMatch('bar', regexp, 'should regexp matches')
  
  t.property(object, 'a', 'should have property a')
  t.notProperty(object, 'd', 'should have property a')

  t.operator(1, '<', 2, 'should be 1 < 2')
  t.operator(3, '>', 2, 'should be 3 > 2')
  t.operator(3, '>=', 2, 'should be 3 >= 2')
  t.operator(2, '<=', 2, 'should be 2 <= 2')
  t.operator(number, '==', number, 'should be 1 == 1')
  t.operator(number, '!=', 2, 'should be 1 != 2')
  t.operator(number, '===', number, 'should be 1 === 1')
  
  t.closeTo(1.5, 1, 0.5, 'numbers should be close')
  t.sameMembers(array, [ 2, 1, 3 ], 'should be same members')
  t.includeMembers(array, [2, 1], 'should include members')

  t.oneOf(number, array, 'should be in array')

  t.end()
})
