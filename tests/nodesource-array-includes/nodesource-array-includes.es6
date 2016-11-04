var data = [11, 22, 33];

function fn() {
  return data.includes(22);
}

assertEqual(fn(), true);
test(fn);
