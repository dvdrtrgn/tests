/* eslint-disable no-undef */
const ll = require('./linkedlist');

let currentHead = ll;

function flatten(node) {
  let arr = [];
  do {
    arr.push(node.value);
    node = node.next();
  } while (node.next());
  arr.push(node.value);
  console.log(arr);
  return arr;
}

function reverse(node) {
  let nextnode = node.next();
  node.next = () => null;

  while (nextnode) {
    let currrent = node;
    node = nextnode;
    nextnode = nextnode.next();
    node.next = () => currrent;
  }
  return node;
}

flatten(currentHead); //?
currentHead = reverse(currentHead);
flatten(currentHead); //?
