function fn() {
  var name = 'foo';
  var ret = {
    [name]: 'bar',
  };
  return ret.foo;
}

fn();
fn();
//%OptimizeFunctionOnNextCall(fn);
print(fn());

// assertEqual(fn().foo, 'bar');
// test(fn);
