"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function hasClass(wrapper, className, msg) {
  this.isTrue(wrapper.hasClass(className), msg);
}

function contains(wrapper, component, msg) {
  this.isTrue(wrapper.contains(component), msg);
}

function containsMatchingElement(wrapper, component, msg) {
  this.isTrue(wrapper.containsMatchingElement(component), msg);
}

function containsAllMatchingElements(wrapper, component, msg) {
  this.isTrue(wrapper.containsAllMatchingElements(component), msg);
}

function everyComponent(wrapper, selector, msg) {
  this.isTrue(wrapper.every(selector), msg);
}

function everyComponentWhere(wrapper, cb, msg) {
  this.isTrue(wrapper.everyWhere(cb), msg);
}

function html(wrapper, value, msg) {
  this.equal(wrapper.html(), value, msg);
}

function instanceComponent(wrapper, inst, msg) {
  this.instanceOf(wrapper.instance(), inst, msg);
}

function isComponent(wrapper, selector, msg) {
  this.isTrue(wrapper.is(selector), msg);
}

function checkKey(wrapper, key, msg) {
  this.equal(wrapper.key(), key, msg);
}

function checkName(wrapper, name, msg) {
  this.equal(wrapper.name(), name, msg);
}

function prop(wrapper, propName, value, msg) {
  this.equal(wrapper.prop(propName), value, msg);
}

function state(wrapper, stateName, value, msg) {
  this.equal(wrapper.state(stateName), value, msg);
}

function text(wrapper, value, msg) {
  this.equal(wrapper.text(), value, msg);
}

function type(wrapper, value, msg) {
  this.equal(wrapper.type(), value, msg);
}

exports.default = {
  hasClass: hasClass, contains: contains, containsMatchingElement: containsMatchingElement, containsAllMatchingElements: containsAllMatchingElements,
  everyComponent: everyComponent, everyComponentWhere: everyComponentWhere, html: html, instanceComponent: instanceComponent, isComponent: isComponent,
  checkKey: checkKey, checkName: checkName, prop: prop, state: state, text: text, type: type
};