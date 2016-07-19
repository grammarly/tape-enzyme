export default tape => (method, func) => tape.Test.prototype[method] = func
