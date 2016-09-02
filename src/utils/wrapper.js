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

import utils from './enzyme'

export default function wrapper(component) {
  const threeArgv = [...Object.keys(utils), 'lengthOf'].reduce((memo, method) => {
    memo[method] = (value, msg) => {
      this[method](component, value, msg)
      return wrapper.apply(this, [component])
    }
    return memo
  }, {})
  const fourArgv = ['prop', 'state', 'stateDeep', 'propDeep'].reduce((memo, method) => {
    memo[method] = (name, value, msg) => {
      this[method](component, name, value, msg)
      return wrapper.apply(this, [component])
    }
    return memo
  }, {})
  const findMethods = [
    'at', 'childAt', 'children', 'closest', 'find',
    'findWhere', 'first', 'last', 'parent', 'parents'
  ].reduce((memo, method) => {
    memo[method] = arg => wrapper.apply(this, [component[method](arg)])
    return memo
  }, {})
  return {
    ...threeArgv,
    ...fourArgv,
    ...findMethods,
    getNode: () => component.node,
    getWrapper: () => component
  }
}
