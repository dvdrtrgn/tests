var arr = ['v1', 'v2', 'v3'];

arr.addedProp = 'arrPropValue';

// elKey are the property keys
for (var elKey in arr) console.log(elKey);

// elValue are the property values
for (var elValue of arr) console.log(elValue);

var obj = {
  k1: 'v1',
  k2: 'v2',
  k3: 'v3',
};

obj.addedProp = 'objPropValue';

// elKey are the property keys
for (var elKey in obj) console.log(elKey);

// elValue are the property values
for (var elValue of obj) console.log(elValue);
