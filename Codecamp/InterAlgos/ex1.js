function sumAll(arr) {
  var i, rez = 0;
  var sortFn = (x, y) => x > y ? 1 : -1;

  arr.sort(sortFn);

  for (i = arr[0]; i <= arr[1]; i++) {
    rez += i
    console.log([i, rez])
  }
  return rez;
}

var x = sumAll([10, 5]);
x
