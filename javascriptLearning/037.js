//catch 메서드 이후에도 then 메서드 사용하기
Promise.reject(10).then(data => {
    console.log('then1 : ',data);
    return 20;
})
.catch(error => {
    console.log('catch : ',error);
    return 30;
})
.then(data => {
    console.log('then2 : ', data);
})