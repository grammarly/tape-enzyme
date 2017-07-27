import test from '../src'

let i = 0
test.beforeEach(() => console.log(`>>>>> Test Start ${++i} <<<<<`))
test.afterEach(() => console.log(`>>>>> Test END ${i} <<<<<\n`))
