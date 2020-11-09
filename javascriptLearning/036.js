//onReject 함수를 사용하지 않고 catch를 사용한 예
Promise.resolve()
.then(() => {
    throw new Error('some error');
})
.catch(error => {
    console.log(error);
});