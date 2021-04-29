function fearNotLetter(str) {
  var arr = str.split('');

  arr = arr.map(e => e.charCodeAt(0));
  str = arr.reduce((a, b) => (a === b - 1) ? b : a);
  str = String.fromCharCode(str + 1);

  return str !== '{' ? str : undefined;
}

var x = fearNotLetter("abcdefghijklmnopqrstuvwxyz");
x
