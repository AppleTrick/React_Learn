function requestData(){
    
}

requestData().then(onResolve, onReject);
Promise.resolve(123).then(data => console.log(data));
Promise.reject('err').then(null , error => console.log('error'));