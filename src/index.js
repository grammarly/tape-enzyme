import Tape from 'tape'
import simpleUtils from './utils/simple'
import enzymeUtils from './utils/enzyme'
import init from './utils/init'
import wrapper from './utils/wrapper'


export function registration(tape) {
  const utils = [enzymeUtils, simpleUtils]
  tape.init = init(tape)
  tape.init('wrapper', wrapper)
  utils.forEach(util =>
    Object.keys(util).forEach(key => tape.init(key, util[key])))
  return tape
}

export default registration(Tape)
