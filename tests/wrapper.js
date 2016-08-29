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
import {Foo, createDom} from './utils' // eslint-disable-line no-unused-vars
import {mount} from 'enzyme'
import test from '../src'

createDom()

test('wrapper test', t => {
  const childWrapper = t.wrapper(mount(<Foo />).find('#child1'))
  const childrenWrapper = t.wrapper(mount(<Foo />).find('.child'))

  childWrapper.isSelector('.child', 'child should has class .child')
  childWrapper.hasClass('child', 'child should has class .child')
  childWrapper.type('span', 'child should has type span')
  childWrapper.checkName('span', 'child should has name span')
  childWrapper.checkKey('2', 'child should has key 2')
  childWrapper.text('First Child', 'child should has text First Child')

  childrenWrapper.lengthOf(2, 'should be 2 children elements')

  t.end()
})

test('wrapper test - `find`', t => {
  const wrapper = t.wrapper(mount(<Foo />))
  const childWrapper = wrapper.find('#child1')

  childWrapper.isSelector('.child', 'child should has class .child')
  childWrapper.hasClass('child', 'child should has class .child')
  childWrapper.type('span', 'child should has type span')
  childWrapper.checkName('span', 'child should has name span')
  childWrapper.checkKey('2', 'child should has key 2')
  childWrapper.text('First Child', 'child should has text First Child')

  t.end()
})

test('wrapper test - `at`', t => {
  const wrapper = t.wrapper(mount(<Foo />)).find('.child').at(0)

  wrapper.isSelector('.child', 'child should has class .child')
  wrapper.hasClass('child', 'child should has class .child')
  wrapper.type('span', 'child should has type span')
  wrapper.checkName('span', 'child should has name span')
  wrapper.checkKey('2', 'child should has key 2')
  wrapper.text('First Child', 'child should has text First Child')

  t.end()
})

test('wrapper test - `childAt`', t => {
  const wrapper = t.wrapper(mount(<Foo />)).childAt(0)

  wrapper.isSelector('.child', 'child should has class .child')
  wrapper.hasClass('child', 'child should has class .child')
  wrapper.type('span', 'child should has type span')
  wrapper.checkName('span', 'child should has name span')
  wrapper.checkKey('2', 'child should has key 2')
  wrapper.text('First Child', 'child should has text First Child')

  t.end()
})

test('wrapper test - `first`', t => {
  const wrapper = t.wrapper(mount(<Foo />)).find('.child').first()

  wrapper.isSelector('.child', 'child should has class .child')
  wrapper.hasClass('child', 'child should has class .child')
  wrapper.type('span', 'child should has type span')
  wrapper.checkName('span', 'child should has name span')
  wrapper.checkKey('2', 'child should has key 2')
  wrapper.text('First Child', 'child should has text First Child')

  t.end()
})

test('wrapper test - `last`', t => {
  const wrapper = t.wrapper(mount(<Foo />)).find('.child').last()

  wrapper.isSelector('.child', 'child should has class .child')
  wrapper.hasClass('child', 'child should has class .child')
  wrapper.type('span', 'child should has type span')
  wrapper.checkName('span', 'child should has name span')
  wrapper.checkKey('3', 'child should has key 3')
  wrapper.text('Second Child', 'child should has text Second Child')

  t.end()
})

test('wrapper test - `closest`', t => {
  const wrapper = t.wrapper(mount(<Foo />)).find('.child').last().closest('#child2')

  wrapper.isSelector('.child', 'child should has class .child')
  wrapper.hasClass('child', 'child should has class .child')
  wrapper.type('span', 'child should has type span')
  wrapper.checkName('span', 'child should has name span')
  wrapper.checkKey('3', 'child should has key 3')
  wrapper.text('Second Child', 'child should has text Second Child')

  t.end()
})

test('wrapper test - `parent`', t => {
  const wrapper = t.wrapper(mount(<Foo />)).find('.child').parent()

  wrapper.checkName('Foo', 'child should has name div')
  wrapper.text('First ChildSecond Child', 'child should has text First ChildSecond Child')

  t.end()
})

test('wrapper test - `getWrapper`', t => {
  const wrapper = t.wrapper(mount(<Foo />)).find('.child').first()

  t.text(wrapper.getWrapper(), 'First Child', 'child should has text First Child')
  t.end()
})
