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

Use three types of usage:

* [Simple](https://github.com/grammarly/tape-enzyme/blob/master/doc/simple.md)
* [Enzyme](https://github.com/grammarly/tape-enzyme/blob/master/doc/enzyme.md)
* [Wrapper](https://github.com/grammarly/tape-enzyme/blob/master/doc/wrapper.md)

## Test

- `npm run tests`

# Publish

- Check if you update version and run `gulp build`. (if you have something new commit changes)
- `npm publish`
- Switch version to new one in your project
