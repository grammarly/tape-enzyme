# Simple Api

Use simple unit tests utils in tape:

### .isTrue(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is `true`.

```js
  t.isTrue(true, 'should be true')
```

### .isFalse(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is `false`.

```js
  t.isFalse(false, 'should be false')
```

### .typeOf(value, type, [message])

* *@param* { Mixed } value
* *@param* { String } name
* *@param* { String } message

Check that `value`’s type is `name`, as determined by `Object.prototype.toString`.

```js
  t.typeOf({foo: 1, bar: 2}, 'object', 'should be an object')
  t.typeOf([1, 2, 3], 'array', 'should be an array')
  t.typeOf('foo', 'string', 'should be a string')
  t.typeOf(1, 'number', 'should be a number')
  t.typeOf(true, 'boolean', 'should be boolean')
  t.typeOf(/^foo/, 'regexp', 'should be a regular expression')
  t.typeOf(new Date(), 'date', 'should be a date')
  t.typeOf(null, 'null', 'should be a null')
  t.typeOf(undefined, 'undefined', 'should be an undefined')
```

### .notTypeOf(value, type, [message])

* *@param* { Mixed } value
* *@param* { String } typeof name
* *@param* { String } message

Check that `value`’s type is not `name`, as determined by `Object.prototype.toString`.

```js
  t.notTypeOf('tea', 'number', 'string should not be number')
```

### .isLess(val1, val2, [message])

* *@param* { Number } val1
* *@param* { Number } val2
* *@param* { String } message

Check that `val1` is less then `val2`.

```js
  t.isLess(1, 2, '1 should be less then 2')
```

### .isMore(val1, val2, [message])

* *@param* { Number } val1
* *@param* { Number } val2
* *@param* { String } message

Check that `val1` is greater then `val2`.

```js
  t.isMore(2, 1, '2 should be greater then 1')
```

### .instanceOf(value, constructor, [message])

* *@param* { Object } value
* *@param* { Constructor } constructor
* *@param* { String } message

Check that `value` is an instance of `constructor`.

```js
  t.instanceOf(new Date(), Date, 'should be instance of Date')
```

### .notInstanceOf(value, constructor, [message])

* *@param* { Object } value
* *@param* { Constructor } constructor
* *@param* { String } message

Check that `value` is not an instance of `constructor`.

```js
  t.notInstanceOf(new Date(), String, 'should not be an instance of String')
```

### .isEmpty(value, [message])

* *@param* { Object } value
* *@param* { String } message

Check that `value` is empty object.

```js
  t.isEmpty({}, 'object should be empty')
  t.isEmpty([], 'array should be empty')
  t.isEmpty('', 'string should be empty')
```

### .isNotEmpty(value, [message])

* *@param* { Object } value
* *@param* { String } message

Check that `value` is not empty object.

```js
  t.isNotEmpty(object, 'object should not be empty')
  t.isNotEmpty(array, 'array should not be empty')
  t.isNotEmpty('foo', 'string should not be empty')
```

### .isObject(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is an object of type `'Object'` (as revealed by `Object.prototype.toString`).

```js
  t.isObject({foo: 1, bar: 2}, 'should be object')
```

### .isNotObject(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is not an object of type `'Object'` (as revealed by `Object.prototype.toString`).

```js
  t.isNotObject('object', 'should not be object')
```

### .isArray(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is an `array`.

```js
  t.isArray([1, 2, 3], 'should be array')
```

### .isNotArray(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is not an `array`.

```js
 t.isNotArray('foo', 'should not be array')
```

### .isString(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is a `string`.

```js
  t.isString('foo', 'should be string')
```

### .isNotString(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is not a `string`.

```js
  t.isNotString({foo: 1}, 'should not be string')
```

### .isNumber(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is a `number`.

```js
  t.isNumber(1, 'should be number')
```

### .isNotNumber(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is not a `number`.

```js
  t.isNotNumber('1', 'should not be number')
```

### .isBoolean(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is a `boolean`.

```js
  t.isNumber(true, 'should be boolean')
```

### .isNotBoolean(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is not a `boolean`.

```js
  t.isNotNumber('true', 'should not be boolean')
```

### .isNull(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is `null`.

```js
  t.isNull(null, 'should be null')
```

### .isNotNull(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is not `null`.

```js
  t.isNotNull(NaN, 'should not be null')
```

### .isNaN(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is `NaN`.

```js
   t.isNaN(NaN, 'should be NaN')
```

### .isNotNaN(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is not `NaN`.

```js
  t.isNotNaN(null, 'should not be NaN')
```

### .isUndefined(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is `undefined`.

```js
  let foo  
  t.isUndefined(foo, 'should be undefined')
```

### .isDefined(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is not `undefined`.

```js
  let tea = 'some tea';
  t.isDefined(tea, 'tea should be defined')
```

### .isFunction(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is a `function`.

```js
  const log = (...argv) => console.log(...argv)
  t.isFunction(log, 'log should be function')
```

### .isNotFunction(value, [message])

* *@param* { Mixed } value
* *@param* { String } message

Check that `value` is not a `function`.

```js
    const foo = 'foo'
   t.isNotFunction(foo, 'foo should not be function')
```

###  .include(haystack, needle, [message])

* *@param* { Array | String } haystack
* *@param* { Mixed } needle
* *@param* { String } message

Check that `haystack` includes `needle`. Works for `strings` and `arrays`.

```js
t.include('foobar', 'bar', 'foobar should include "bar"')
t.include([1, 2, 3], 3, 'array should include 3')
```

### .notInclude(haystack, needle, [message])

* *@param* { Array | String } haystack
* *@param* { Mixed } needle
* *@param* { String } message

Check that `haystack` does not include `needle`. Works for `strings` and `arrays`.

```js
assert.notInclude('foobar', 'baz', 'string should not include substring')
assert.notInclude([1, 2, 3], 4, 'array should not include contain value')
```

### .match(value, regexp, [message])

* *@param* { Mixed } value
* *@param* { RegExp } regexp
* *@param* { String } message

Check that `value` matches the regular expression `regexp`.

```js
assert.match('foobar', /^foo/, 'regexp should match')
```

### .notMatch(value, regexp, [message])

* *@param* { Mixed } value
* *@param* { RegExp } regexp
* *@param* { String } message

Check that `value` does not match the regular expression `regexp`.

```js
t.notMatch('foobar', /^foo/, 'regexp should not match')
```

### .property(object, property, [message])

* *@param* { Object } object
* *@param* { String } property
* *@param* { String } message

Check that `object` has a property named by `property`.

```js
  t.property({foo: 'foo'}, 'foo', 'should have property "foo"')
```

### .notProperty(object, property, [message])

*@param* { Object } object
*@param* { String } property
*@param* { String } message

Check that `object` does not have a property named by `property`.

```js
  t.notProperty({foo: 'foo'}, 'bar', 'should not have property "bar"')
```

### .operator(val1, operator, val2, [message])

* *@param* { Mixed } val1
* *@param* { String } operator
* *@param* { Mixed } val2
* *@param* { String } message

Check two `values` using `operator`.

```js
  t.operator(1, '<', 2, 'should be 1 < 2')
  t.operator(3, '>', 2, 'should be 3 > 2')
  t.operator(3, '>=', 2, 'should be 3 >= 2')
  t.operator(2, '<=', 2, 'should be 2 <= 2')
  t.operator(1, '==', 1, 'should be 1 == 1')
  t.operator(1, '!=', 2, 'should be 1 != 2')
  t.operator(1, '===', 1, 'should be 1 === 1')
```

### .closeTo(actual, expected, delta, [message])

* *@param* { Number } actual
* *@param* { Number } expected
* *@param* { Number } delta
* *@param* { String } message

Check that the `target` is equal `expected`, to within a `+/-` `delta` range.

```js
  t.closeTo(1.5, 1, 0.5, 'numbers should be close')
```

### .sameMembers(set1, set2, [message])

* *@param* { Array } set1
* *@param* { Array } set2
* *@param* { String } message

Check that `set1` and `set2 `have the same `members`. Order is not taken into account.

```js
   t.sameMembers([1, 2, 3], [2, 1, 3], 'should be same members')
```

### .includeMembers(superset, subset, [message])

* *@param* { Array } superset
* *@param* { Array } subset
* *@param* { String } message

Check that `subset` is included in `superset`. Order is not taken into account.

```js
   t.includeMembers([1, 2, 3], [2, 1], 'should include members')
```

### .oneOf(inList, list, [message])

* *@param* { } inList
* *@param* { Array.<*> } list
* *@param* { String } message

Check that non-object, non-array value `inList` appears in the flat array `list`.

```js
   t.oneOf(1, [1, 2, 3], 'should be in array')
```