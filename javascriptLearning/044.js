function requestData(){
    console.log('requested!!');
}
let catchedPromise;
function getData() {
    catchedPromise = catchedPromise || requestData();
    return catchedPromise;
}

getData().then(v => console.log(v));
getData().then(v => console.log(v));