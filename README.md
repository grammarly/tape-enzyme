# Tape-Enzyme

* Tape-Enzyme micro library - help Grammarly front-end services to use tape with enzyme.
* Responsibility: Acquisition Team

## Installation

- Use NPM: `npm i --save @grammarly/tape-enzyme`

## Usage

Tape-Enzyme is a proxy of [tape](https://github.com/substack/tape), but it has better functionality.
Import library and use as `tape` test:
```js
import test from '@grammarly-npm/tape-enzyme'
```

### Simple Api

#### .isTrue(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is `true`.

```js
  t.isTrue(true, 'should be true')
```

#### .isFalse(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is `false`.

```js
  t.isFalse(false, 'should be false')
```

#### .typeOf(value, type, [message])

* @param { Mixed } value
* @param { String } name
* @param { String } message

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

#### .notTypeOf(value, type, [message])

* @param { Mixed } value
* @param { String } typeof name
* @param { String } message

Check that `value`’s type is not `name`, as determined by `Object.prototype.toString`.

```js
  t.notTypeOf('tea', 'number', 'string should not be number')
```

#### .instanceOf(value, constructor, [message])

* @param { Object } object
* @param { Constructor } constructor
* @param { String } message

Check that `value` is an instance of `constructor`.

```js
  t.instanceOf(new Date(), Date, 'should be instance of Date')
```

#### .notInstanceOf(value, constructor, [message])

* @param { Object } object
* @param { Constructor } constructor
* @param { String } message

Check that `value` is not an instance of `constructor`.

```js
  t.notInstanceOf(new Date(), String, 'should not be an instance of String')
```

#### .isObject(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is an object of type `'Object'` (as revealed by `Object.prototype.toString`).

```js
  t.isObject({foo: 1, bar: 2}, 'should be object')
```

#### .isNotObject(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is not an object of type `'Object'` (as revealed by `Object.prototype.toString`).

```js
  t.isNotObject('object', 'should not be object')
```

#### .isArray(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is an array.

```js
  t.isArray([1, 2, 3], 'should be array')
```

#### .isNotArray(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is not an array.

```js
 t.isNotArray('foo', 'should not be array')
```

#### .isString(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is a string.

```js
  t.isString('foo', 'should be string')
```

#### .isNotString(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is not a string.

```js
  t.isNotString({foo: 1}, 'should not be string')
```

#### .isNumber(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is a number.

```js
  t.isNumber(1, 'should be number')
```

#### .isNotNumber(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is not a number.

```js
  t.isNotNumber('1', 'should not be number')
```

#### .isBoolean(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is a boolean.

```js
  t.isNumber(true, 'should be boolean')
```

#### .isNotBoolean(value, [message])

* @param { Mixed } value
* @param { String } message

Check that `value` is not a boolean.

```js
  t.isNotNumber('true', 'should not be boolean')
```


## Test
- `npm run tests`

# Publish

- Check if you update version and run `gulp build`. (if you have something new commit changes)
- `npm publish`
- Switch version to new one in your project
