function spinalCase(str) {
  str = str.replace(/([a-z]+)/g, '$1 ');
  str = str.replace(/_/g, '-')
  str = str.trim().replace(/[ -]+/g, '-')

  return str.toLowerCase();
}

var x = spinalCase('AllThe-small Things');
x
