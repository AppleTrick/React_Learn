function requestData(){
    return fetch()
    .catch(error => {

    })
    .finally(()=>{
        sendLogToServer('request finished');
    });
}

requestData().then((data)=>{
    console.log(data);
})

