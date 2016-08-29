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

import test from '../src'

test.init('notStrictEqual', function (actual, expected, msg) {
  this.operator(actual, '!==', expected, msg)
})

test('init test', t => {
  t.property(t, 'notStrictEqual')
  t.notStrictEqual(3, '3', 'should be not strict equality')
  t.end()
})
