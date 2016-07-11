import {jsdom} from 'jsdom-no-contextify'
import React, {Component} from 'react'
import {mount} from 'enzyme'
import test from '../src'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView

const child1 = <span id='child1' className='child foo'>Child1</span>
const child2 = <span id='child2' className='child foo'>Child2</span>

class Foo extends Component {
  constructor() {
    super()
    this.state = {
      foo: 1
    }
  }
  
  render () {
    return (
      <div id='parent' className='parent foo' key='1'>
        {child1}
        {child2}
      </div>
    )
  }
}

test('enzyme test', t => {
  const wrapper = mount(<Foo foo={2} />)
  const parent = wrapper.find('#parent')
  
  t.hasClass(parent, 'parent', 'should has class parent')
  t.lengthOf(parent.find('.child'), 2, 'should has tow elements with class child')
  t.contains(wrapper, child1, 'should contains component')
  t.containsMatchingElement(wrapper, <span>Child1</span>, 'should match component')
  t.containsAllMatchingElements(
    wrapper,
    [<span>Child1</span>, <span>Child2</span>],
    'should match component'
  )
  t.everyComponent(parent, '.foo', 'every element should has class child')
  t.everyComponentWhere(parent, n => n.hasClass('foo'), 'every element should has class child')
  t.html(
    wrapper.find('#child1'),
    '<span id="child1" class="child foo">Child1</span>',
    'should equals html'
  )
  t.instanceComponent(wrapper, Foo, 'should be instance of Foo')
  t.isComponent(parent, '#parent', 'should be id parent')
  t.checkKey(parent, '1', 'key should be 1')

  t.checkName(parent, 'div', 'should be div')
  t.text(parent, 'Child1Child2', 'should be text')

  t.state(wrapper, 'foo', 1, 'should be foo equals 1 in state')
  t.prop(wrapper, 'foo', 2, 'should be foo equals 2 in props')

  t.type(parent, 'div', 'should has type div')

  t.end()
})
