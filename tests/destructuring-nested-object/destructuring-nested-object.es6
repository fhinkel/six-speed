var data = {
  a: 'foo',
  b: {c: 'd'}
};

function fn() {
  var {a, b:{c:b}} = data;
  return b;
}

assertEqual(fn(), 'd');
test(fn);
