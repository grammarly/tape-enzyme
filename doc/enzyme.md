# Enzyme

Use advance enzyme utils in:

### .contains(wrapper, nodeOrNodes, [message])

* *@param* { Object<EnzymeMount> } wrapper
* *@param* { ReactElement | Array<ReactElement> } nodeOrNodes 
* *@param* { String } message

Check if the current `wrapper` has a `node` anywhere in it's render tree that looks like the one passed in.

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

### .notContains(wrapper, nodeOrNodes, [message])

* *@param* { Object<EnzymeMount> } wrapper
* *@param* { ReactElement | Array<ReactElement> } nodeOrNodes 
* *@param* { String } message

Check if the current `wrapper` hasn't a `node` anywhere in it's render tree that looks like the one passed in.

```js
  const wrapper = mount(
    <div>
      <span>Hello</span>
      <div>Goodbye</div>
      <span>Again</span>
    </div>
  )

  t.notContains(wrapper, [<span>Foo</span>, <div>Bar</div>], 'should not contains elements')
```

### .containsMatchingElement(wrapper, node, [message])

* *@param* { Object<EnzymeMount> } wrapper
* *@param* { ReactElement } node 
* *@param* { String } message

Check if the current `wrapper` has a `node` anywhere in its render tree that looks like the one passed in.

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

* *@param* { Object<EnzymeMount> } wrapper
* *@param* { Array<ReactElement> } nodes
* *@param* { String } message

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

* *@param* { Object<EnzymeMount> } wrapper
* *@param* { Array<ReactElement> } nodes
* *@param* { String } message

Check if the current `wrapper` has a `nodes` anywhere in its render tree that looks like the one of the array passed in.

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

### .everyComponent(wrapper, selector, [message])

* *@param* { Object<EnzymeMount> } wrapper
* *@param* { String } selector
* *@param* { String } message

Check if every `node` in the current wrapper matched the provided `selector`.

```js
  const wrapper = mount(
    <div className='wrapper'>
      <div className="foo qoo" />
      <div className="foo boo" />
      <div className="foo hoo" />
    </div>
  )
  
  t.everyComponent(wrapper.find('.wrapper'), '.foo', 'every element should have class foo')
```


### .everyWhere(wrapper, function, [message])

* *@param* { Object<EnzymeMount> } wrapper
* *@param* { Function } function
* *@param* { String } message

Check if every `node` in the current wrapper passed the predicate `function`.

```js
  const wrapper = mount(
    <div className='wrapper'>
      <div className="foo qoo" />
      <div className="foo boo" />
      <div className="foo hoo" />
    </div>
  )
  
  t.everyWhere(wrapper.find('.wrapper'), x => x.hasClass('foo'), 'every element should have class foo')
```

### .hasClass(wrapper, className, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { String } className
* *@param* { String } message

Check if the current node has a `className` prop including the passed in class name.

```js
  const wrapper = mount(<MyComponent />)
  t.hasClass(wrapper.find('#child'), 'child', 'should have class child')
```

* `.hasClass()` expects a class name, NOT a CSS selector. `.hasClass('.foo')` should be `.hasClass('foo')`

### .hasNotClass(wrapper, className, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { String } className
* *@param* { String } message

Check if the current node has not a `className` prop including the passed in class name.

```js
  const wrapper = mount(<MyComponent />)
  t.hasNotClass(wrapper.find('#child'), 'parent', 'should have not class parent')
```

### .html(wrapper, value, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { String } value
* *@param* { String } message


Check the resulting HTML `string`.

```js
  const wrapper = mount(<div>foo</div>)
  t.html(wrapper, '<div>foo</div>', should equals html)
```

### .instanceComponent(wrapper, constructor, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { ReactComponent } constructor
* *@param* { String } message

Check that `node` is an instance of `constructor`.

```js
  const wrapper = mount(<Foo />)
  t.instanceComponent(wrapper, Foo, 'should be instance of Foo')
```

### .isSelector(wrapper, selector, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { String } selector
* *@param* { String } message

Check the current `node` matches a provided `selector`.

```js
  const wrapper = mount(<div className='foo bar' />)
  t.isSelector(wrapper, '.foo', 'should have class foo')
```

### .isNotSelector(wrapper, selector, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { String } selector
* *@param* { String } message

Check if the current `node` doesn't match a provided `selector`.

```js
  const wrapper = mount(<div className='foo bar' />)
  t.isNotSelector(wrapper, '.bar', 'should not have class foo')
```


### .checkKey(wrapper, key, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { String } key
* *@param* { String } message

Check `key` of the current node.

```js
  const wrapper = mount(
    <ul>
      {['foo', 'bar'].map(s => <li key={s}>{s}</li>)}
    </ul>
  ).find('li')
  
  t.checkKey(wrapper.at(0), 'foo', 'key should be foo')
  t.checkKey(wrapper.at(1), 'bar', 'key should be bar')
```

### .checkName(wrapper, name, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { String } name
* *@param* { String } message

Check `name` of the current node.

```js
  const wrapper = mount(<div/>)
  t.checkName(wrapper, 'div', 'should be div')
```

### .text(wrapper, value, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { String } value
* *@param* { String } message

Check the resulting of text content of the `node`.

```js
 const wrapper = mount(<div><b>important</b></div>)
 t.text(wrapper, 'important', 'should be important')
```

### .type(wrapper, type, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { String } name
* *@param* { String } message

Check `type` of the current node.

```js
  const wrapper = mount(<div />)
  t.type(wrapper, 'div', 'should be div')
```

```js
  const wrapper = mount(<Foo />)
  t.type(wrapper, 'Foo', 'should be Foo')
```

### .prop(wrapper, propName, value, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { String } propName
* *@param* { } value
* *@param* { String } message

Check `prop` of the current node.

```js
  const wrapper = mount(<MyComponent foo={10} />)
  t.prop(wrapper, 'foo', 10, 'property foo should be equal to 10')
```

### .state(wrapper, stateName, value, [message])

* *@param* { Object<EnzymeMount> } Enzyme Mount ReactElement
* *@param* { String } stateName
* *@param* { } value
* *@param* { String } message

Check `prop` of the current node.

```js
  class Foo extends Component {
    constructor() {
      super()
      this.state = {
        foo: 1
      }
    }
  }
    
  const wrapper = mount(<Foo />)
  t.prop(wrapper, 'foo', 1, 'state foo should be equal to 1')
```
