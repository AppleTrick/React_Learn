//배열은 반복 가능한 객체다
const arr = [10,20,30];
const iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());