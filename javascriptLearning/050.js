//프로미스를 반환하는 async await 함수
async function getData (){
    return Promise.resolve(123);
}

getData().then(data => console.log(data));