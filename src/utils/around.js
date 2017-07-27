const invoke = (hooks, t) => args => {
  let pipeline = Promise.resolve(args)
  hooks.forEach(hook => pipeline = pipeline.then(promisify(hook, t)))
  return pipeline
}

const invokeForce = (hooks, t) => args => {
  let pipeline = Promise.resolve(args)
  const len = hooks.length
  hooks.forEach((hook, i) => 
    pipeline = pipeline
      .then(promisify(hook, t))
      .catch(errArgs => {
        if (i === len - 1) {
          throw errArgs
        }
        t.error(errArgs.error)
        return errArgs.args
      }))
  return pipeline
}

const promisify = (fn, t) => args => {
  return new Promise(function(resolve, reject) {
    const tt = {...t, next, nextAdd, end}
    try {
      fn.apply(this, [tt].concat(args || []))
    }
    catch (error) {
      return reject({error, args})
    }

    function next() {
      resolve([].slice.call(arguments))
    }

    function nextAdd() {
      resolve(args.concat([].slice.call(arguments)))
    }

    function end(error) {
      error ? reject({error, args}) : resolve(args)
    }
  })
}

export default function around (tape, msg, _hooks) {
  const test  = (name, fn) => run(name, fn, tape)
  const before = fn => around(
    tape, msg, {...hooks, before: hooks.before.concat([fn])}
  )
  const after = fn => around(
    tape, msg, {...hooks, after: hooks.after.concat([fn])}
  )
  const hooks = {
    before: _hooks && _hooks.before || [],
    after: _hooks && _hooks.after || []
  }
  const run = (name, fn, tape) => {
    const newname = msg ? msg + ' ' + name : name
    return tape(newname, t => Promise.resolve()
      .then(invoke(hooks.before, t))
      .then(promisify(fn, t))
      .then(args => invokeForce(hooks.after, t)(args)
        .then(() => t.end())
        .catch(errArgs => t.end(errArgs.error))
      )
      .catch(errArgs => invokeForce(hooks.after, t)(errArgs.args)
        .then(() => t.end(errArgs.error))
        .catch(errArgs2 => {
          t.error(errArgs.error)
          t.end(errArgs2.error)
        })
      ))
  }

  Object.keys(tape).forEach(key => test[key] = tape[key])
  test.only = (name, fn) => run(name, fn, tape.only)
  test.skip = (name, fn) => run(name, fn, tape.skip)
  test.test = (name, fn) => run(name, fn, tape.test)
  test.before = before
  test.after = after

  return test
}
