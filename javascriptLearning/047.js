function requestData(){
    return Promise.resolve(10).then(() => {
        return 20;
    });
}
requestData().then( v => {
    console.log(v);
});