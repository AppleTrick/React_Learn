function getDefault(){
    return 1;
}
function printLog(a = getDefault()){
    console.log({a});
}
printLog();
