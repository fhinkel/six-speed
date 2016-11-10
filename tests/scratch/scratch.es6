function fn() {
  var name = 'foo';
  var ret = {
    [name+1]: 'bar',
  };
  return ret.foo1;
}

fn();
fn();
%OptimizeFunctionOnNextCall(fn);
print(fn());

// assertEqual(fn().foo, 'bar');
// test(fn);
