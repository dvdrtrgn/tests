/* eslint-disable no-undef */
const ll = require('./linkedlist');

let currentHead = ll;

function flatten(node) {
  let arr = [];
  do {
    arr.push(node);
    node = node.next();
  } while (node.next());
  arr.push(node);
  console.log(arr);
  return arr;
}

function resetNexts(arr) {
  arr.reduce((a, b) => {
    if (a) {
      a.next = () => b;
      b.next = () => null;
    }
    return b;
  }, null);
  return arr[0];
}

const rev = flatten(currentHead).reverse();
let newHead = resetNexts(rev);

flatten(newHead); //?
