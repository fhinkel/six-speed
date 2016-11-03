var data = 'hello';

function fn() {
  var [a] = data;
  return a;
}

assertEqual(fn(), 'h');
test(fn);
