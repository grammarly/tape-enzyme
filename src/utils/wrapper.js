export default function wrapper(component) {
  const methods = [
    'hasClass', 'html', 'lengthOf', 'type', 'checkName', 'checkKey', 'text',
    'isSelector', 'containsMatchingElement', 'containsAllMatchingElements',
    'everyComponent', 'everyComponentWhere', 'instanceComponent'
  ]
  return methods.reduce((res, method) => {
    res[method] = (value, msg) => this[method](component, value, msg)
    return res
  }, {
    prop: (propName, value, msg) => this.prop(propName, value, msg),
    state: (stateName, value, msg) => this.prop(stateName, value, msg)
  })
}
