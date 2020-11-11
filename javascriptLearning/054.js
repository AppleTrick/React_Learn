//await 키워드를 나중에 사용해서 병렬로 실행되는 비동기 코드
async function getData() {
    const p1 = asyncFunc1();
    const p2 = asyncFunc2();
    const data1 = await p1;
    const data2 = await p2;
    // ..
}