


Promise.race([
    requestData(),
    new Promise((_, reject) => setTimeout(reject,3000)),
])
.then(data => console.log(data))
.catch( () => console.log('error!!!'));

