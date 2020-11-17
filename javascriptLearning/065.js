//제너레이터는 반복가능한 개체
function* f1() {

}

const gen = f1();
console.log(gen[Symbol.iterator]() === gen); // true