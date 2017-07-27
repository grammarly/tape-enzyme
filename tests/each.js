import test from '../src'

let i = 0
test.beforeEach(() => console.log(`>>>>> TEST START ${++i} <<<<<`)) // eslint-disable-line no-console
test.afterEach(() => console.log(`>>>>> TEST END ${i} <<<<<\n`)) // eslint-disable-line no-console

const delay  = ms => new Promise(resolve => setTimeout(resolve, ms))

test('async test', async t => {
  t.plan(1)
  await delay(0)
  t.ok(true)
  
})
