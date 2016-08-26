# Tape-Enzyme

Tape-Enzyme is micro library, which help to use [Tape](https://github.com/substack/tape) with [Enzyme](https://github.com/airbnb/enzyme).

## Installation

- Use NPM: `npm i --save @grammarly/tape-enzyme`

## Usage

Tape-Enzyme is a proxy of [tape](https://github.com/substack/tape), but it has better functionality.

Import library and use as `tape` test:

```js
import test from '@grammarly-npm/tape-enzyme'
```

Also you can add plugin to your current `tape` instance:

```js
import test from 'tape'
import {registration} from '@grammarly-npm/tape-enzyme'

export default registration(test)
```

Use three types of testing utils:

* [Simple](https://github.com/grammarly/tape-enzyme/blob/master/doc/simple.md)
* [Enzyme](https://github.com/grammarly/tape-enzyme/blob/master/doc/enzyme.md)
* [Wrapper](https://github.com/grammarly/tape-enzyme/blob/master/doc/wrapper.md)

You can add your own methods using `init`:

### .init(methodName, func)

* *@param* { String } methodName
* *@param* { Function } func

Example:

```js
test.init('notStrictEqual', function (actual, expected, msg) {
  this.operator(actual, '!==', expected, msg)
})

test('notStrictEqual test', t => {
  t.notStrictEqual(3, '3', 'should be not strict equality')
  t.end()
})

```

## Test

- `npm run tests`

# Publish

- Check if you update version and run `gulp build`. (if you have something new commit changes)
- `npm publish`
- Switch version to new one in your project
