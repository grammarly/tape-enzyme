import test from '../src'

test.init('notStrictEqual', function (actual, expected, msg) {
  this.operator(actual, '!==', expected, msg)
})

test('init test', t => {
  t.property(t, 'notStrictEqual')
  t.notStrictEqual(3, '3', 'should be not strict equality')
  t.end()
})
