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

import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import {jsdom} from 'jsdom-no-contextify'

export const firstChild = <span id='child1' key='2' className='child foo'>First Child</span>
export const secondChild = <span id='child2' key='3' className='child foo'>Second Child</span>

export const bar = {
  bar: 1,
  foo: 2
}

export class Foo extends Component {
  constructor() {
    super()
    this.state = {
      foo: 1,
      bar
    }
  }

  render () {
    return (
      <div id='parent' className='parent foo' key='1'>
        {firstChild}
        {secondChild}
      </div>
    )
  }
}

export function createDom() {
  global.document = jsdom('<!doctype html><html><body></body></html>')
  global.window = document.defaultView
}
