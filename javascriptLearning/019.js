const add = (a,b) => a + b;
console.log(add(1,2,));

const add5 = a => a + 5;
console.log(add5(1));

const addAndReturnObject = (a,b) => ({result : a+b});
console.log(addAndReturnObject(1,2).result);