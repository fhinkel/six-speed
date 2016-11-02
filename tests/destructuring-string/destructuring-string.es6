var data = 'hello';

function fn() {
  var [, a] = data;
  return a;
}

assertEqual(fn(), 'e');
test(fn);
