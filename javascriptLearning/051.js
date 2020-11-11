// async await 함수에서 예외가 발생하는 경우
async function getData() {
    throw new Error('123');
}

getData().catch(error => console.log(error));