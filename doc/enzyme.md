# Enzyme

Use advance enzyme utils in:

### .hasClass(wrapper, className, [message])

* @param { Object<EnzymeMount> } Enzyme Mount ReactElement
* @param { String } className
* @param { String } message

Check that current node has a `className` prop including the passed in class name.

```js
  const wrapper = mount(<MyComponent />)
  t.hasClass(wrapper.find('#child'), 'child', 'should has class child')
```

* `.hasClass()` expects a class name, NOT a CSS selector. `.hasClass('.foo')` should be `.hasClass('foo')`

### .contains(wrapper, nodeOrNodes, [message])

* @param { Object<EnzymeMount> } wrapper
* @param { ReactElement | Array<ReactElement> } nodeOrNodes 
* @param { String } message

Check whether or not the current `wrapper` has a `node` anywhere in it's render tree that looks like the one passed in.

```js
  const wrapper = mount(
    <div>
      <span>Hello</span>
      <div>Goodbye</div>
      <span>Again</span>
    </div>
  )

  t.contains(wrapper, [<span>Hello</span>, <div>Goodbye</div>], 'should contains elements')
```

### .containsMatchingElement(wrapper, node, [message])

* @param { Object<EnzymeMount> } wrapper
* @param { ReactElement } node 
* @param { String } message

Check whether or not the current `wrapper` has a `node` anywhere in its render tree that looks like the one passed in.

```js
  const MyComponent = React.createClass({
    handleClick() {
      ...
    },
  
    render() {
      return (
        <div>
          <div onClick={this.handleClick} className="foo bar">Hello</div>
        </div>
      )
    }
  })

  const wrapper = mount(<MyComponent />)
  t.containsMatchingElement(wrapper, <div>Hello</div>, 'should contains node')
```

* `.containsMatchingElement()` expects a `ReactElement`, not a `selector` (like many other methods). Make sure that when you are calling it you are calling it with a ReactElement or a JSX expression.
* Keep in mind that this method determines equality based on the equality of the node's children as well.

### .containsAllMatchingElements(wrapper, nodes, [message])

* @param { Object<EnzymeMount> } wrapper
* @param { Array<ReactElement> } nodes
* @param { String } message

Check whether or not the current `wrapper` has a `nodes` anywhere in its render tree that looks like the nodes passed in.

```js
  const wrapper = mount(
    <div>
      <span className='foo'>Hello</span>
      <div style={{fontSize: 13}}>Goodbye</div>
      <span>Again</span>
    </div>
  )

  t.containsAllMatchingElements(wrapper, [<span>Hello</span>, <div>Goodbye</div], 'should contains all nodes')
```

### .containsAnyMatchingElements(wrapper, nodes, [message])

* @param { Object<EnzymeMount> } wrapper
* @param { Array<ReactElement> } nodes
* @param { String } message

Check whether or not the current `wrapper` has a `nodes` anywhere in its render tree that looks like the one of the array passed in.

```js
  const wrapper = mount(
    <div>
      <span className='foo'>Hello</span>
      <div style={{fontSize: 13}}>Goodbye</div>
      <span>Again</span>
    </div>
  )

  t.containsAllMatchingElements(wrapper, [<span>Bonjour</span>, <div>Goodbye</div], 'should contains all nodes')
```
