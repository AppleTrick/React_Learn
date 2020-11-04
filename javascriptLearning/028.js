const p1 = Promise.resolve(123);
console.log(p1 !== 123);

const p2 = new Promise(resolve => setTimeout(() => resolve(10),1));
console.log(Promise.resolve(p2) === p2);