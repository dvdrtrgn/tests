function regurgitate(arr) {
  var temp = new BSTree(arr.shift());

  arr.forEach((x) => temp.insert(x));

  Vtree.setTree(temp);
}

function rebirth(num) {
  var arr = Vtree.$data.tree.inOrder();

  switch (num) {
    case 1:
      arr = concatMids(arr);
      break;
  }
  console.log(arr);

  regurgitate(arr.slice());
}

/*



*/
