import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import {jsdom} from 'jsdom-no-contextify'

export const firstChild = <span id='child1' key='2' className='child foo'>First Child</span>
export const secondChild = <span id='child2' key='3' className='child foo'>Second Child</span>

export class Foo extends Component {
  constructor() {
    super()
    this.state = {
      foo: 1
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
