function myReplace(str, before, after) {
  function hasCap(str) {
    return Boolean(str.match(/^[A-Z]/));
  }

  function makeCap(str) {
    var a = str[0], b = str.slice(1);
    return a.toUpperCase() + b;
  }

  function takeCap(str) {
    var a = str[0], b = str.slice(1);
    return a.toLowerCase() + b;
  }

  after = hasCap(before) ? makeCap(after) : takeCap(after);

  return str.replace(before, after);
}

var x = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
x
