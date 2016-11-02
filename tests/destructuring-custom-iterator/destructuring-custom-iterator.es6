// 3,5,7,...,21
var x = 3;

var iterator = function() {
  function next() {
    x = x + 2;
    if (x > 9) {
      return {done: true, value: x};
    }
    return {done: false, value: x};
  }
  return {next: next};
};


function fn() {
  var iterable = {};
  iterable[Symbol.iterator] = iterator;

  
  var [ , , , a] = iterable;
  return a;
}

assertEqual(fn(), 9);
test(fn);