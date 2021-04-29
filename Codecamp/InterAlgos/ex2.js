function diffArray(arr1, arr2) {
  var newArr = [];
  var both = arr1.concat(arr2);

  both.forEach(function (e) {
    var aHas = arr1.includes(e);
    var bHas = arr2.includes(e);

    if (!(aHas && bHas)) newArr.push(e);
  })

  return newArr;
}

var x = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
x
