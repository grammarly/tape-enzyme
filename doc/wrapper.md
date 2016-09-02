# Wrapper

### .wrapper(wrapper)

* *@param* { Object<EnzymeMount> } wrapper
* *@return* { Object } test wrapper

`Test wrapper` allows you to use all methods of [enzyme api](https://github.com/grammarly/tape-enzyme/blob/master/doc/enzyme.md), without using the `t.*` construction.
Also it has some search methods, including: 

* `at`
* `childAt`
* `children`
* `closest`
* `find`
* `findWhere`
* `first`
* `last`
* `parent`
* `parents`

The result of them will be a new `test wrapper`.

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

  const wrapper = mount(<Foo />)
  const testWrapper = t.wrapper(wrapper)
  const childTestWrapper = testWrapper.find('#child1')
  const childrenTestWrapper = t.wrapper(wrapper.find('.child'))

  childTestWrapper
    .isSelector('.child', 'child should has class .child')
    .hasClass('child', 'child should has class .child')
    .type('span', 'child should has type span')
    .checkName('span', 'child should has name span')
    .checkKey('2', 'child should has key 2')
    .text('First Child', 'child should has text First Child')

  childrenTestWrapper.lengthOf(2, 'should be 2 children elements')
```