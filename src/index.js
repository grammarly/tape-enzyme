import Tape from 'tape'
import CommonUtils from './utils/common'
import EnzymeUtils from './utils/enzyme'

[EnzymeUtils, CommonUtils].forEach(utils =>
  Object.keys(utils).forEach(key => Tape.Test.prototype[key] = utils[key]))

export default Tape
