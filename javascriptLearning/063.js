//제너레이터 객체의 throw 메서드 호출하기
function* f1(){
    try {
        console.log('f1-1');
        yield 10;
        console.log('f1-2');
        yield 20;
    } catch (error) {
        console.log('f1-catch',error);
    }
}

const gen = f1();
console.log(gen.next());
console.log(gen.throw('some error'));