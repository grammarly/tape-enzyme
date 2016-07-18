import utils from './enzyme'

export default function wrapper(component) {
  const threeArgv = [...Object.keys(utils), 'lengthOf'].reduce((memo, method) => {
    memo[method] = (value, msg) => this[method](component, value, msg)
    return memo
  }, {})
  const fourArgv = ['prop', 'state', 'stateDeep', 'propDeep'].reduce((memo, method) => {
    memo[method] = (name, value, msg) => threeArgv[method](component, name, value, msg)
    return memo
  }, {})
  return {
    ...threeArgv,
    ...fourArgv
  }
}
