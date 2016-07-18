import React from 'react' // eslint-disable-line no-unused-vars
import {Foo, createDom} from './utils' // eslint-disable-line no-unused-vars
import {mount} from 'enzyme'
import test from '../src'

test('wrapper test', t => {
  createDom()

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
