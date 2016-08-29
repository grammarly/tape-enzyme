/*-
 * Copyright 2016 Grammarly, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
