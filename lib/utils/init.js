"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (tape) {
  return function (method, func) {
    return tape.Test.prototype[method] = func;
  };
};