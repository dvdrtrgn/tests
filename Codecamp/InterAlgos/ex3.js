function destroyer(arr, ...xtra) {
  return arr.filter(e => !xtra.includes(e));
}

var x = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
x
