Promise.resolve(10)
.then(data => {
    console.log(data);
    return Promise.resolve(20);
})
.then(data => {
    console.log(data);
})