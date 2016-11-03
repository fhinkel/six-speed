var data = 'hello';

function fn() {
  var [, a] = data;
  return a;
}

assertEqual(fn(), 'e');
test(fn);


//
// function fn(a) {
//   var [b] = a;
// }
//
// fn('a');
// fn('a');
// %OptimizeFunctionOnNextCall(fn)
// fn('a');

// --trace-escape