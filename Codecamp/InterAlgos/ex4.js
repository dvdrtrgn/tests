function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  var keys = Object.keys(source);
  var vals = Object.values(source);

  function tryMatch(obj) {
    var all = 0;
    keys.forEach(function (key, i){
      if (obj[key] === vals[i]) all += 1;
    });
    return all === vals.length;
  }

  collection.forEach(function (o) {
    if (tryMatch(o)) arr.push(o);
  });

  // Only change code above this line
  return arr;
}

var x = whatIsInAName([
  { first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }
], { last: "Capulet" });
x
