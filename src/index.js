import Tape from 'tape'
import simpleUtils from './utils/simple'
import enzymeUtils from './utils/enzyme'
import wrapper from './utils/wrapper'

[enzymeUtils, simpleUtils].forEach(utils =>
  Object.keys(utils).forEach(key => Tape.Test.prototype[key] = utils[key]))

Tape.Test.prototype.wrapper = wrapper

export default Tape
