var data = {a: 3};

function fn() {
  var {a=10, b=5} = data;
  return a + b;
}

assertEqual(fn(), 8);
test(fn);