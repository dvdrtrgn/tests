/* eslint-disable no-undef */
var d = { value: 4, next: () => null };
var c = { value: 3, next: () => d };
var b = { value: 2, next: () => c };
var a = { value: 1, next: () => b };

module.exports = a;
