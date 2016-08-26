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

## Development

#### Prerequisites

* You have `node` installed at v4.0.0+ and `npm` at v2.0.0+.
* You are familiar with `git`.

#### Setup

```shell
$ git clone <this repo>
$ cd tape-enzyme
$ npm install
```

#### Tests

Linters:

```shell
$ npm run test:lint
```

Unit tests:

```shell
$ npm run test:unit
```

All tests:

```shell
$ npm test
```


## Contributing

The main purpose of this library is to make writing tests with `tape` easier: 
less code, more expressive and as robust as possible. If you think that we are missing 
the key features, please open a GitHub issue or even better - a pull request. 
Any feedback you have about using `tape-enzyme` would be greatly appreciated.

## License

Tape-enzyme is [Apache 2.0 licensed](./LICENSE.md).

