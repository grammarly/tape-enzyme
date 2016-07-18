# Wrapper

Wrapper is proxy to tape enzyme api, which use enzyme wrapper element for initialization.

Example:

```js
  const firstChild = <span id='child1' key='2' className='child foo'>First Child</span>
  const secondChild = <span id='child2' key='3' className='child foo'>Second Child</span>

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
          {firstChild}
          {secondChild}
        </div>
      )
    }
  }

  const childWrapper = t.wrapper(mount(<Foo />).find('#child1'))
  const childrenWrapper = t.wrapper(mount(<Foo />).find('.child'))

  childWrapper.isSelector('.child', 'child should has class .child')
  childWrapper.hasClass('child', 'child should has class .child')
  childWrapper.type('span', 'child should has type span')
  childWrapper.checkName('span', 'child should has name span')
  childWrapper.checkKey('2', 'child should has key 2')
  childWrapper.text('First Child', 'child should has text First Child')

  childrenWrapper.lengthOf(2, 'should be 2 children elements')
```

