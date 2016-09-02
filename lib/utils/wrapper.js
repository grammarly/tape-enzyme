'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = wrapper;

var _enzyme = require('./enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*-
                                                                                                                                                                                                     * Copyright 2016 Grammarly, Inc.
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * Licensed under the Apache License, Version 2.0 (the "License");
                                                                                                                                                                                                     * you may not use this file except in compliance with the License.
                                                                                                                                                                                                     * You may obtain a copy of the License at
                                                                                                                                                                                                     *
                                                                                                                                                                                                     *     http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * Unless required by applicable law or agreed to in writing, software
                                                                                                                                                                                                     * distributed under the License is distributed on an "AS IS" BASIS,
                                                                                                                                                                                                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                                                                                                                                                                                     * See the License for the specific language governing permissions and
                                                                                                                                                                                                     * limitations under the License.
                                                                                                                                                                                                     */

function wrapper(component) {
  var _this = this;

  var threeArgv = [].concat(_toConsumableArray(Object.keys(_enzyme2.default)), ['lengthOf']).reduce(function (memo, method) {
    memo[method] = function (value, msg) {
      _this[method](component, value, msg);
      return wrapper.apply(_this, [component]);
    };
    return memo;
  }, {});
  var fourArgv = ['prop', 'state', 'stateDeep', 'propDeep'].reduce(function (memo, method) {
    memo[method] = function (name, value, msg) {
      _this[method](component, name, value, msg);
      return wrapper.apply(_this, [component]);
    };
    return memo;
  }, {});
  var findMethods = ['at', 'childAt', 'children', 'closest', 'find', 'findWhere', 'first', 'last', 'parent', 'parents'].reduce(function (memo, method) {
    memo[method] = function (arg) {
      return wrapper.apply(_this, [component[method](arg)]);
    };
    return memo;
  }, {});
  return _extends({}, threeArgv, fourArgv, findMethods, {
    getNode: function getNode() {
      return component.node;
    },
    getWrapper: function getWrapper() {
      return component;
    }
  });
}