function translatePigLatin(str) {
  var arr = str.split(/([aeiou])/)
  var vow = !arr[0];
  arr.push(arr.shift());

  str = arr.join('') + (vow ? 'way' : 'ay');
  return str;
}

var x = translatePigLatin("consonant");
x
