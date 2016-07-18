function hasClass(wrapper, className, msg) {
  this.isTrue(wrapper.hasClass(className), msg)
}

function hasNotClass(wrapper, className, msg) {
  this.isFalse(wrapper.hasClass(className), msg)
}

function contains(wrapper, node, msg) {
  this.isTrue(wrapper.contains(node), msg)
}

function notContains(wrapper, node, msg) {
  this.isFalse(wrapper.contains(node), msg)
}

function containsMatchingElement(wrapper, node, msg) {
  this.isTrue(wrapper.containsMatchingElement(node), msg)
}

function containsAllMatchingElements(wrapper, nodes, msg) {
  this.isTrue(wrapper.containsAllMatchingElements(nodes), msg)
}

function containsAnyMatchingElements(wrapper, nodes, msg) {
  this.isTrue(wrapper.containsAnyMatchingElements(nodes), msg)
}

function everyComponent(wrapper, selector, msg) {
  this.isTrue(wrapper.every(selector), msg)
}

function notEveryComponent(wrapper, selector, msg) {
  this.isFalse(wrapper.every(selector), msg)
}

function everyComponentWhere(wrapper, cb, msg) {
  this.isTrue(wrapper.everyWhere(cb), msg)
}

function html(wrapper, value, msg) {
  this.equal(wrapper.html(), value, msg)
}

function instanceComponent(wrapper, inst, msg) {
  this.instanceOf(wrapper.instance(), inst, msg)
}

function isSelector(wrapper, selector, msg) {
  this.isTrue(wrapper.is(selector), msg)
}

function isNotSelector(wrapper, selector, msg) {
  this.isFalse(wrapper.is(selector), msg)
}

function checkKey(wrapper, key, msg) {
  this.equal(wrapper.key(), key, msg)
}

function checkName(wrapper, name, msg) {
  this.equal(wrapper.name(), name, msg)
}

function prop(wrapper, propName, value, msg) {
  this.equal(wrapper.prop(propName), value, msg)
}

function state(wrapper, stateName, value, msg) {
  this.equal(wrapper.state(stateName), value, msg)
}

function propDeep(wrapper, propName, value, msg) {
  this.deepEqual(wrapper.prop(propName), value, msg);
}

function stateDeep(wrapper, stateName, value, msg) {
  this.deepEqual(wrapper.state(stateName), value, msg);
}

function text(wrapper, value, msg) {
  this.equal(wrapper.text(), value, msg)
}

function type(wrapper, value, msg) {
  this.equal(wrapper.type(), value, msg)
}

export default {
  hasClass, contains, containsMatchingElement, containsAllMatchingElements,
  everyComponent, everyComponentWhere, html, instanceComponent, isSelector,
  checkKey, checkName, prop, state, text, type, containsAnyMatchingElements,
  notEveryComponent, isNotSelector, notContains, hasNotClass, propDeep, stateDeep
}
