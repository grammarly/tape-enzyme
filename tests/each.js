import test from '../src'

let i = 0
test.beforeEach(() => console.log(`>>>>> TEST START ${++i} <<<<<`)) // eslint-disable-line no-console
test.afterEach(() => console.log(`>>>>> TEST END ${i} <<<<<\n`)) // eslint-disable-line no-console
