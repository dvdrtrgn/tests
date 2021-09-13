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

function reverse(head) {
  let next = head.next();
  head.next = () => null;

  while (next) {
    let curr = head;
    [head, next] = [next, next.next()];
    head.next = () => curr;
  }
  return head;
}

flatten(currentHead); //?
currentHead = reverse(currentHead);
flatten(currentHead); //?
