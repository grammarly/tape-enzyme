import test from 'tape'
import {registration} from '../src'

registration(test)

test('registration test', t => {
  t.property(t, 'hasClass')
  t.property(t, 'oneOf')
  
  t.end()
})
