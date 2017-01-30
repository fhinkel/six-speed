class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class MyPoint extends Point {}

function makePoint(x, y) {
  return new MyPoint(x, y);
}

function fn() {
  var point = makePoint(1, 2);
  return point.x;
}

assertEqual(fn(), 1);
test(fn);
