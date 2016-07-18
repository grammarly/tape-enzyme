import utils from './enzyme'

export default function wrapper(component) {
  const res = [...Object.keys(utils), 'lengthOf'].reduce((memo, method) => {
    memo[method] = (value, msg) => this[method](component, value, msg)
    return memo
  }, {})
  return {
    ...res,
    prop: (propName, value, msg) => this.prop(component, propName, value, msg),
    state: (stateName, value, msg) => this.state(component, stateName, value, msg)
  }
}
