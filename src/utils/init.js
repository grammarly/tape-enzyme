export default tape => (method, func) => tape.Test.prototype.wrapper[method] = func
