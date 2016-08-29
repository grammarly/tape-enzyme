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

import React from 'react' // eslint-disable-line no-unused-vars
import {Foo, firstChild, createDom, bar} from './utils'
import {mount} from 'enzyme'
import test from '../src'


test('enzyme test', t => {
  createDom()
  
  const wrapper = mount(<Foo foo={2} bar={bar} />)
  const parent = wrapper.find('#parent')
  
  t.hasClass(parent, 'parent', 'should has class parent')
  t.hasNotClass(parent, 'child', 'should has not class child')
  t.isFound(parent, '.child', 'should has nodes with child class')
  t.isNotFound(parent, '.notExistingClass', 'should hasn\'t nodes with not existing class')
  t.lengthOf(parent.find('.child'), 2, 'should has tow elements with class child')
  t.contains(wrapper, firstChild, 'should contains node')
  t.containsMatchingElement(wrapper, <span>First Child</span>, 'should match node')
  t.containsAllMatchingElements(
    wrapper,
    [<span>First Child</span>, <span>Second Child</span>],
    'should match nodes'
  )
  t.everyComponent(parent, '.foo', 'every element should has class child')
  t.everyComponentWhere(parent, n => n.hasClass('foo'), 'every element should has class child')
  t.html(
    wrapper.find('#child1'),
    '<span id="child1" class="child foo">First Child</span>',
    'should equals html'
  )
  t.instanceComponent(wrapper, Foo, 'should be instance of Foo')
  t.isSelector(parent, '#parent', 'should be id parent')
  t.checkKey(parent, '1', 'key should be 1')

  t.checkName(parent, 'div', 'should be div')
  t.text(parent, 'First ChildSecond Child', 'should be text')

  t.state(wrapper, 'foo', 1, 'should be foo equals 1 in state')
  t.prop(wrapper, 'foo', 2, 'should be foo equals 2 in props')

  t.stateDeep(wrapper, 'bar', bar, 'bar state should be equals to bar')
  t.propDeep(wrapper, 'bar', bar, 'bar props should be equals to bar')

  t.type(parent, 'div', 'should has type div')

  t.end()
})
