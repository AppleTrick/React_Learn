//await 키워드의 사용 예
function requestData(value) {
    return new Promise(resolve =>
        setTimeout(()=> {
            console.log('requestData : ' , value);
            resolve(value);
        }, 3000),
    );
}
async function getData() {
    const data1 = await requestData(10);
    const data2 = await requestData(20);
    console.log(data1 , data2);
}

getData();