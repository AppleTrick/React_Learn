//제너레이터 함수끼리 호출하기
function* g1(){
    yield 2;
    yield 3;
}
function* g2(){
    yield 1;
    yield* g1();
    yield 4;
}

console.log(...g2()); // 1  2  3  4