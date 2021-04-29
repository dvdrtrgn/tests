const squareList = (arr) => {
  // Only change code below this line
  return arr.reduce((a, b) => (b >= 0 && (b | 0) === b && a.push(b ** 2), a), []);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
