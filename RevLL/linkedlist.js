/* eslint-disable no-undef */
var d = { value: 4, next: () => null };
var c = { value: 3, next: () => d };
var b = { value: 2, next: () => c };
var a = { value: 1, next: () => b };

module.exports = a;

// function reverse(node) {
//   let nextnode = node.next();
//   node.next = () => null;

//   while (nextnode) {
//     let currrent = node;
//     node = nextnode;
//     nextnode = nextnode.next();
//     node.next = () => currrent;
//   }
//   return node;
// }


// function reverse(head) {
//   let next = head.next();
//   head.next = () => null;

//   while (next) {
//     let curr = head;
//     head = next;
//     next = next.next();
//     head.next = () => curr;
//   }
//   return head;
// }
