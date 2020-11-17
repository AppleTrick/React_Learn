//반복가능한 객체를 이용하는 코드
function* f1() {
    yield 10;
    yield 20;
    yield 30;
}

for( const v of f1()){
    console.log(v);
}
// 10
// 20
// 30

const arr = [...f1()];

console.log(arr); // [ 10, 20, 30 ]
