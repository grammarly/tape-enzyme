'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = wrapper;
function wrapper(component) {
  var _this = this;

  var methods = ['hasClass', 'html', 'lengthOf', 'type', 'checkName', 'checkKey', 'text', 'isSelector', 'containsMatchingElement', 'containsAllMatchingElements', 'everyComponent', 'everyComponentWhere', 'instanceComponent'];
  return methods.reduce(function (res, method) {
    res[method] = function (value, msg) {
      return _this[method](component, value, msg);
    };
    return res;
  }, {
    prop: function prop(propName, value, msg) {
      return _this.prop(propName, value, msg);
    },
    state: function state(stateName, value, msg) {
      return _this.prop(stateName, value, msg);
    }
  });
}