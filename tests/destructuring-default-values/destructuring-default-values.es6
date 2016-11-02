var data = {a: 3};


function fn() {
  var a = data.a || 10;
  var b = data.b || 5;
  return b;
}

assertEqual(fn(), 5);
test(fn);
