import Tape from 'tape'
import commonUtils from './utils/common'
import enzymeUtils from './utils/enzyme'
import wrapper from './utils/wrapper'

[enzymeUtils, commonUtils].forEach(utils =>
  Object.keys(utils).forEach(key => Tape.Test.prototype[key] = utils[key]))

Tape.Test.prototype.wrapper = wrapper

export default Tape
