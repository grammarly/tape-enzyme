'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = around;
var invoke = function invoke(hooks, t) {
  return function (args) {
    var pipeline = Promise.resolve(args);
    hooks.forEach(function (hook) {
      return pipeline = pipeline.then(promisify(hook, t));
    });
    return pipeline;
  };
};

var invokeForce = function invokeForce(hooks, t) {
  return function (args) {
    var pipeline = Promise.resolve(args);
    var len = hooks.length;
    hooks.forEach(function (hook, i) {
      return pipeline = pipeline.then(promisify(hook, t)).catch(function (errArgs) {
        if (i === len - 1) {
          throw errArgs;
        }
        t.error(errArgs.error);
        return errArgs.args;
      });
    });
    return pipeline;
  };
};

var promisify = function promisify(fn, t) {
  return function (args) {
    return new Promise(function (resolve, reject) {
      var tt = _extends({}, t, { next: next, nextAdd: nextAdd, end: end });
      try {
        fn.apply(this, [tt].concat(args || []));
      } catch (error) {
        return reject({ error: error, args: args });
      }

      function next() {
        resolve([].slice.call(arguments));
      }

      function nextAdd() {
        resolve(args.concat([].slice.call(arguments)));
      }

      function end(error) {
        error ? reject({ error: error, args: args }) : resolve(args);
      }
    });
  };
};

function around(tape, msg, _hooks) {
  var test = function test(name, fn) {
    return run(name, fn, tape);
  };
  var before = function before(fn) {
    return around(tape, msg, _extends({}, hooks, { before: hooks.before.concat([fn]) }));
  };
  var after = function after(fn) {
    return around(tape, msg, _extends({}, hooks, { after: hooks.after.concat([fn]) }));
  };
  var hooks = {
    before: _hooks && _hooks.before || [],
    after: _hooks && _hooks.after || []
  };
  var run = function run(name, fn, tape) {
    var newname = msg ? msg + ' ' + name : name;
    return tape(newname, function (t) {
      return Promise.resolve().then(invoke(hooks.before, t)).then(promisify(fn, t)).then(function (args) {
        return invokeForce(hooks.after, t)(args).then(function () {
          return t.end();
        }).catch(function (errArgs) {
          return t.end(errArgs.error);
        });
      }).catch(function (errArgs) {
        return invokeForce(hooks.after, t)(errArgs.args).then(function () {
          return t.end(errArgs.error);
        }).catch(function (errArgs2) {
          t.error(errArgs.error);
          t.end(errArgs2.error);
        });
      });
    });
  };

  Object.keys(tape).forEach(function (key) {
    return test[key] = tape[key];
  });
  test.only = function (name, fn) {
    return run(name, fn, tape.only);
  };
  test.skip = function (name, fn) {
    return run(name, fn, tape.skip);
  };
  test.test = function (name, fn) {
    return run(name, fn, tape.test);
  };
  test.before = before;
  test.after = after;

  return test;
}