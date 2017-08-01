'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registration = registration;

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _around = require('./utils/around');

var _around2 = _interopRequireDefault(_around);

var _simple = require('./utils/simple');

var _simple2 = _interopRequireDefault(_simple);

var _enzyme = require('./utils/enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _init = require('./utils/init');

var _init2 = _interopRequireDefault(_init);

var _wrapper = require('./utils/wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*-
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

function registration(tape) {
  var utils = [_enzyme2.default, _simple2.default];

  var afterEach = null;
  var beforeEach = null;

  var test = (0, _around2.default)(tape).before(function (t) {
    beforeEach && beforeEach();
    t.next();
  }).after(function (t) {
    afterEach && afterEach();
    t.next();
  });

  test.init = (0, _init2.default)(tape);
  test.init('wrapper', _wrapper2.default);
  utils.forEach(function (util) {
    return Object.keys(util).forEach(function (key) {
      return test.init(key, util[key]);
    });
  });

  test.afterEach = function (cb) {
    return afterEach = cb;
  };
  test.beforeEach = function (cb) {
    return beforeEach = cb;
  };

  return test;
}

exports.default = registration(_tape2.default);