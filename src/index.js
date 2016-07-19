import Tape from 'tape'
import simpleUtils from './utils/simple'
import enzymeUtils from './utils/enzyme'
import init from './utils/init'
import wrapper from './utils/wrapper'


export function registration(tape) {
  [enzymeUtils, simpleUtils].forEach(utils =>
    Object.keys(utils).forEach(key => tape.Test.prototype[key] = utils[key]))
  tape.Test.prototype.wrapper = wrapper
  tape.init = init(tape)
  return tape
}

export default registration(Tape)
