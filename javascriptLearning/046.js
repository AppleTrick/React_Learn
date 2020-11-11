function requestData(){
    const p = Promise.resolve(10);

    p.then(() => {
        return 20;
    });
    
    return p;
}
requestData().then( v => {
    console.log(v);
});